import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Page = ({ children }: Props) => (
    <div className="w-10/12 flex flex-col items-center">{children}</div>
);

export default Page;
