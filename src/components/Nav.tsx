import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const linkList = [
	{id:1, title:'Home', href:'/'},
	{id:2, title:'My Todo', href:'/myTodo'},
]

export const Nav = () => {
	return (
		<nav className='flex justify-between items-center w-full border border-b-zinc-200 px-8 py-4'>
			<h3 className='text-base lg:text-lg font-medium'>
				Next.js Server Actions
			</h3>

			{ linkList.map(link => <Link className="text-primary underline-offset-4 hover:underline" key={link.id} href={link.href}>{link.title}</Link>) }
			
			<ModeToggle />
		</nav>
	);
};
