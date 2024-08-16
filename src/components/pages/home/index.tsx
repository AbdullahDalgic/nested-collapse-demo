import { useState } from "react";
import { Popconfirm, Tooltip, Empty, Form, Input, Flex, Button } from "antd";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import NestedCollapse, { ICollapseData, TreeData } from "nested-collapse";
import {
  StyledDeleteButton,
  StyledActionButton,
} from "@/components/pages/home/index.styled";
import { Data } from "@/libs/Db/CollapseData";

export default function () {
  const [form] = Form.useForm();
  const [data, setData] = useState<Partial<ICollapseData>[]>(Data);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAdd = (values: ICollapseData) => {
    setIsLoading(true);
    const newData = [
      ...data,
      { ...values, id: Math.floor(Math.random() * 1000) + 1 },
    ];
    setData(newData);
    form.resetFields();
    setIsLoading(false);
  };

  const handleDelete = (id: any) => {
    setIsLoading(true);
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setIsLoading(false);
  };

  return (
    <>
      <NestedCollapse
        data={TreeData(data)}
        isLoading={isLoading}
        showHeaderBorder={true}
        showBodyBorder={true}
        AddItemButtonTitle={() => (
          <>
            <FaPlus />
            Add New Item
          </>
        )}
        AddItemComponent={({ parentId }) => (
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            autoComplete="off"
            onFinish={(values) => handleAdd({ ...values, parentId })}
            form={form}
          >
            <Form.Item
              label="Item Name"
              name="title"
              rules={[{ required: true, message: "Please input item name!" }]}
            >
              <Input />
            </Form.Item>

            <Flex justify="end" gap={10}>
              <Button htmlType="button" onClick={() => form.resetFields()}>
                Reset
              </Button>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Flex>
          </Form>
        )}
        HeaderOpenIcon={() => <FaArrowRight />}
        HeaderCloseIcon={() => <FaArrowDown />}
        HoverComponent={({ parentId, addChild }) => (
          <>
            <Popconfirm
              title="Are you sure to delete this item?"
              onConfirm={() => handleDelete(parentId)}
              okText="Yes"
              cancelText="No"
            >
              <Tooltip title={"Delete this item"}>
                <StyledDeleteButton
                  danger
                  type="primary"
                  icon={<IoTrashBin />}
                  onClick={(e: any) => e.stopPropagation()}
                />
              </Tooltip>
            </Popconfirm>

            <Tooltip title={"Add new item"}>
              <StyledActionButton
                type="primary"
                icon={<FaPlus />}
                onClick={addChild}
              />
            </Tooltip>
          </>
        )}
        EmptyComponent={() => (
          <Empty className="Empty" image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      />
    </>
  );
}
