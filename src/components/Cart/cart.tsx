import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export default function Cart() {
  return (
    <Badge
      badgeContent={4}
      color="secondary"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <ShoppingCart />
    </Badge>
  );
}
