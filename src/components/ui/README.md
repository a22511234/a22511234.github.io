# UI Components

This folder contains reusable UI components for the personal website project. Below is a brief description of each component:

## Components

- **Accordion**: Expandable/collapsible sections for displaying hierarchical content.
- **AlertDialog**: Dialog box for warnings or confirmations.
- **Alert**: Simple notification or alert messages.
- **AspectRatio**: Maintains the aspect ratio of an element (e.g., images or videos).
- **Avatar**: Displays user profile pictures or initials.
- **Badge**: Small labels or indicators for status or counts.
- **Breadcrumb**: Navigation path for the current page.
- **Button**: Interactive buttons with various styles and states.
- **Calendar**: Calendar component for date selection or event display.
- **Card**: Container for displaying information or actions.
- **Carousel**: Image or content slider.
- **Chart**: Data visualization with support for various chart types.
- **Checkbox**: Multi-select input for forms.
- **Collapsible**: Expandable/collapsible content areas.
- **Command**: Command palette for quick actions or shortcuts.
- **ContextMenu**: Right-click menu for contextual actions.
- **Dialog**: Modal dialog for displaying content or actions.
- **Drawer**: Slide-in panel for navigation or additional content.
- **DropdownMenu**: Dropdown menu for actions or navigation.
- **Form**: Form builder with validation support.
- **HoverCard**: Card that appears on hover for additional information.
- **InputOTP**: Input fields for one-time passwords.
- **Input**: Text input fields for forms.
- **Label**: Labels for form elements.
- **Menubar**: Menu bar for navigation or actions.
- **NavigationMenu**: Multi-level navigation menu.
- **Pagination**: Pagination controls for lists or content.
- **Popover**: Pop-up content for additional information or actions.
- **Progress**: Progress bar for task completion.
- **RadioGroup**: Group of radio buttons for single selection.
- **Resizable**: Resizable panels or containers.
- **ScrollArea**: Scrollable content area.
- **Select**: Dropdown select input.
- **Separator**: Divider for separating content.
- **Sheet**: Fullscreen or partial modal window.
- **Sidebar**: Sidebar for navigation or additional content.
- **Skeleton**: Placeholder for loading states.
- **Slider**: Range slider for value selection.

## Usage

Each component is designed to be reusable and customizable. Import the required component into your React files and use it as needed.

```tsx
import { Button } from "@/components/ui/button";

function Example() {
  return <Button>Click Me</Button>;
}