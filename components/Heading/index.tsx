import React, { ReactNode, useEffect } from 'react';

export enum HeadingType {
    small,
    medium,
    large,
    extraLarge
}

const defaultProps = {
    type: HeadingType.medium,
    additionalClasses: ''
};

type Props = {
    type?: HeadingType;
    children: ReactNode;
    additionalClasses?: string;
};

const Heading = ({ children, type, additionalClasses }: Props) => {
    let HeadingComponent: any;
    let headingClasses: string;
    headingClasses = '';

    if (type === HeadingType.small) {
        HeadingComponent = 'h4';
        headingClasses += 'text-sm';
    } else if (type === HeadingType.medium) {
        HeadingComponent = 'h3';
        headingClasses += 'text-md';
    } else if (type === HeadingType.large) {
        HeadingComponent = 'h2';
        headingClasses += 'text-lg';
    } else {
        HeadingComponent = 'h1';
        headingClasses += 'text-xl';
    }

    return (
        <HeadingComponent className={`${headingClasses} ${additionalClasses}`}>
            {children}
        </HeadingComponent>
    );
};

Heading.defaultProps = defaultProps;

export default React.memo(Heading);
