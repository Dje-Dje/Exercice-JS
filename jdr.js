var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force, et " + this.xp + " points d'expérience.";
        return description;
    }
};