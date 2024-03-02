export const fliter = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singlefliter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "100-499", label: "$100 To $499" },
      { value: "499-999", label: "$499 To $999" },
      { value: "999-1499", label: "$999 To $1499" },
      { value: "1499-1999", label: "$1499 To $1999" },
      { value: "1999-100000", label: "$1999 To $100000" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% off or more" },
      { value: "20", label: "20% off or more" },
      { value: "30", label: "30% off or more" },
      { value: "40", label: "40% off or more" },
      { value: "50", label: "50% off or more" },
      { value: "60", label: "60% off or more" },
      { value: "70", label: "70% off or more" },
      { value: "80", label: "80% off or more" },
      { value: "90", label: "90% off or more" },
      // Add more options as needed
    ],
  },
  {
    id: "availability",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock"   },
      { value: "out_of_stock", label: "Out of Stock"   },
      // Add more options as needed
    ],
  },
];
