import { CreateComponent } from "@riadh-adrani/recursive";
import View from "../View";

class LazyReverseRowView extends View {
    constructor() {
        super("lazy-reverse-row");
    }
}

View.makeDefaultStyle("lazy-reverse-row{display:flex;flex-direction:row;}");

class LazyReverseRow extends CreateComponent {
    constructor({ children, onObserved, props, key, events, style, flags, hooks }) {
        super({
            tag: "lazy-reverse-row",
            children,
            onObserved,
            props,
            key,
            events,
            style,
            flags,
            hooks,
        });

        this.data = { itemCount: this.children.length };

        this.hooks.onRef = () => {
            if (hooks && hooks.onRef && typeof hooks.onRef === "function") hooks.onRef();

            if (this.children.length === 0 || typeof onObserved != "function") return;

            var observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting === true) {
                        observer.unobserve(entries[0].target);

                        if (entries[0].target === this.domInstance.firstChild)
                            onObserved(this.domInstance);
                    }
                },
                { threshold: [0] }
            );

            observer.observe(this.domInstance.firstChild);
        };
    }
}

export default ({ children, onObserved, props, key, events, style, flags, hooks }) => {
    return new LazyReverseRow({
        onObserved,
        children,
        props,
        key,
        events,
        hooks,
        style,
        flags,
    });
};
