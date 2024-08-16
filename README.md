# Nested Collapse Demo

This repository is a demo page created to showcase how to use the `nested-collapse` package in a real-world scenario. Here, you can find interactive examples demonstrating the features and capabilities of the package.

## Demo Overview

This demo page demonstrates various features and usage scenarios of the `nested-collapse` package. Below are examples of the core functionalities and configuration options you can achieve with the package.

## Features

- **Nested Collapsible Content:** Interact with expandable or collapsible nested sections.
- **Customization Options:** See how you can modify the appearance and behavior with different props.
- **Integration Examples:** Learn how to integrate the `nested-collapse` package into your React project with real-world examples.

## Getting Started

To run the demo locally, clone this repository and follow the instructions below.

### Clone the Repository

```bash
git clone https://github.com/AbdullahDalgic/nested-collapse-demo.git
cd nested-collapse-demo
```

### Install Dependencies

Ensure that Node.js and npm (or Yarn) are installed. Then, install the required dependencies:

```bash
npm install
# or
yarn install
```

### Run the Demo

To start the development server and view the demo, use the following command:

```bash
npm run dev
# or
yarn dev
```

The demo will be available at `http://localhost:3000` in your web browser.

## Usage

The demo page includes examples and usage instructions for the `nested-collapse` package.

## Example Code

Here is a basic example of how `nested-collapse` is used in the demo:

```tsx
import React from "react";
import NestedCollapse from "nested-collapse";
const App: React.FC = () => {
  return (
    <>
      <NestedCollapse
        showHeaderBorder={true}
        showBodyBorder={true}
        colors={["#f00", "#0f0", "#00f"]}
        data={data}
        isLoading={false}
        AddItemButtonTitle={() => <>Add Item</>}
        AddItemComponent={({ parentId }) => (
          <form>{/* Form fields to add a new item */}</form>
        )}
        HeaderOpenIcon={() => <span>▼</span>}
        HeaderCloseIcon={() => <span>►</span>}
        HoverComponent={({ parentId, addChild }) => (
          <div>
            <button onClick={() => addChild(parentId)}>Add Child</button>
            {/* Other actions */}
          </div>
        )}
        EmptyComponent={() => <>No items added yet.</>}
      />
    </>
  );
};
```

## Props Documentation

Refer to the `nested-collapse` package documentation for detailed information about each prop and how to use them in your application.

## Contributing

Contributions to the demo page are welcome! If you have suggestions, improvements, or find issues, please feel free to open an issue or submit a pull request.

## License

This repository is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Author

Created by [Abdullah Dalgıç](https://abdullahdalgic.com.tr).

## Acknowledgements

Special thanks to the creators and supporters of the `nested-collapse` package.
