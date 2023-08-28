import { DetailedHTMLProps, HTMLAttributes } from "react";

interface IProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const BooksGrid = ({ children, ...rest }: IProps) => (
	<div {...rest}>
		{children}
	</div>
);

export default BooksGrid;
