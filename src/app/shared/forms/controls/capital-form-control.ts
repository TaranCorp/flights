import { FormControl } from "@angular/forms";

export class CapitalFormControl extends FormControl {
    override setValue(value: string, options: any) {
        if (!value) {
            super.setValue(
                '',
                {
                    ...options,
                    emitModelToViewChange: true
                }
            );
            return;
        }

        super.setValue(
            value[0].toUpperCase() + value.slice(1),
            {
                ...options,
                emitModelToViewChange: true
            }
        )
    }
}
