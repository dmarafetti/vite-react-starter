import {forwardRef, useEffect, useRef} from "react";

type IndeterminateCheckboxType = {

    indeterminate: boolean

}

/**
 * Indeterminate checkbox
 */
export default forwardRef( function IndeterminateCheckbox (props: IndeterminateCheckboxType){

    const {indeterminate, ...rest} = props;

    const defaultRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {

        if(defaultRef.current !== null) {

            defaultRef.current.indeterminate = indeterminate;
        }

    }, [defaultRef, indeterminate]);

    return <input type="checkbox" ref={defaultRef} {...rest}/>;
});
