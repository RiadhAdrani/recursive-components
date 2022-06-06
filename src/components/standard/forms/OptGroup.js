import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, disabled, label, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "optgroup",
        children,
        props: { ...props, disabled, label },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
