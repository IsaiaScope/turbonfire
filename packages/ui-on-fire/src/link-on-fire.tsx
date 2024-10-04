import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@packages/utilities-on-fire/cn';

const anchorVariants = cva(
	'no-underline text-inherit hover:text-inherit visited:text-inherit focus:text-inherit active:text-inherit',
	{
		variants: {
			variant: {
				default: '',
				link: '',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

type Props = {
	children: React.ReactNode;
	className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
	VariantProps<typeof anchorVariants>;

export default function LinkOnFire({
	children,
	className,
	variant,
	rel = 'noopener noreferrer',
	target = '_blank',
	...props
}: Props) {
	return (
		<a
			{...props}
			rel={rel}
			target={target}
			className={cn(anchorVariants({ variant, className }))}>
			{children}
		</a>
	);
}
