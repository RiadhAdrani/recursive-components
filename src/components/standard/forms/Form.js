import { CreateComponent } from "@riadh-adrani/recursive";

export default ({
    children,
    acceptCharSet,
    autoComplete,
    name,
    rel,
    action,
    encType,
    method,
    noValidate,
    props,
    key,
    events,
    hooks,
    style,
    flags,
}) => {
    return new CreateComponent({
        tag: "form",
        children,
        props: {
            ...props,
            acceptCharSet,
            autoComplete,
            name,
            rel,
            action,
            encType,
            method,
            noValidate,
        },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
