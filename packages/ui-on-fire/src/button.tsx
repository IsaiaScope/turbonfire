import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	className?: string;
}

export default function Button({ children, className }: ButtonProps) {
	return (
		<button className={className} onClick={() => alert(`Hello from your app!`)}>
			{children}
		</button>
	);
}
