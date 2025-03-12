export class Base {
    id: string | null = null;
    created: Date | null = null;
    metadata: any = {};

    constructor(c: any | null = null) {
        if (c) {
            this.id = c.id ? c.id : null;
            this.created = c.created ? c.created : null;
            this.metadata = c.metadata ? c.metadata : null;

        }
    }

    isNew(): boolean {
        return this.id == null;
    }
}