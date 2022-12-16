import { forwardRef } from "react";
import * as Styled from "./style";

type CanvasDefaultProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
>;

type CanvasForwardedRef = React.ForwardedRef<HTMLCanvasElement>;

interface CanvasProps extends CanvasDefaultProps {}

const Canvas = forwardRef(
  (props: CanvasProps, forwardedRef: CanvasForwardedRef) => {
    return <Styled.Canvas ref={forwardedRef} {...props} />;
  }
);

export default Canvas;

Canvas.displayName = "Canvas";
