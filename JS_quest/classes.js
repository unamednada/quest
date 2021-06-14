class Materializer {
    constructor(nameTarget) {
        this.target = nameTarget;
        this.activated = false;
    }

    activate() {
        this.activated = true;
    }
    
    materialize() {
        if (this.activated == true) {
            return this.target;
        }
        return 
    }

}