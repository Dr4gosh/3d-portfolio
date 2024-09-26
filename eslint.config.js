import { ReactThreeFiber } from "@react-three/fiber";

export default [
  {
    plugins: {
      "@react-three": ReactThreeFiber,
    },
    rules: {
      "react/no-unknown-property": "off",
    },
  },
];
