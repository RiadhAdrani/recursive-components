import { CreateComponent } from "@riadh-adrani/recursive";

export default ({
    children,
    colSpan,
    headers,
    rowSpan,
    props,
    key,
    events,
    hooks,
    style,
    flags,
}) => {
    return new CreateComponent({
        tag: "td",
        children,
        props: { ...props, colSpan, headers, rowSpan },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
