import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, form, disabled, name, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "fieldset",
        children,
        props: { ...props, form, disabled, name },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
