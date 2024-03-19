class circle {
    constructor(ra, eM, ma, de) {
        this.radius_oneSideLength = ra;
        this.mass = ma;
        this.density = de;
        this.elasticModulus = eM;
        this.shiftDistance = 0;
        this.acceleration = 0;
        this.velocity = 0;
        this.elasticPotentialEnergy = 0;
        this.gravityPotentialEnergy = 0;
        this.kineticEnergy = 0;
        this.mouseFollowing = false;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(mouseX, mouseY-velocity, this.radius_oneSideLength, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

class square {
    constructor(ra, eM, ma, de) {
        this.radius_oneSideLength = ra;
        this.mass = ma;
        this.density = de;
        this.elasticModulus = eM;
        this.shiftDistance = 0;
        this.acceleration = 0;
        this.velocity = 0;
        this.elasticPotentialEnergy = 0;
        this.gravityPotentialEnergy = 0;
        this.kineticEnergy = 0;
        this.mouseFollowing = false;
    }

    isFollowing() {
        if 
    }

    draw() {
        ctx.strokeRect(mouseX - this.radius_oneSideLength / 2, mouseY - this.radius_oneSideLength / 2, this.radius_oneSideLength, this.radius_oneSideLength);
    }
}


