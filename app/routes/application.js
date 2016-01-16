import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    // this.store.push({
    //   spell: [
    //     {id: 1, title: `Analyse de l'équilibre`, level: this.store.findRecord('level', 1)},
    //     {id: 2, title: `Bénédiction`, level: this.store.findRecord('level', 1)},
    //     {id: 3, title: `Création d'eau`, level: this.store.findRecord('level', 1)},
    //     {id: 4, title: `Détection de la magie`, level: this.store.findRecord('level', 1)},
    //     {id: 5, title: `Détection du mal`, level: this.store.findRecord('level', 1)},
    //     {id: 6, title: `Détection du poison`, level: this.store.findRecord('level', 1)},
    //     {id: 7, title: `Endurance Chaud/Froid`, level: this.store.findRecord('level', 1)},
    //     {id: 8, title: `Gardien sacré`, level: this.store.findRecord('level', 1)},
    //     {id: 9, title: `Gourdin Magique`, level: this.store.findRecord('level', 1)},
    //     {id: 10, title: `Injonction`, level: this.store.findRecord('level', 1)},
    //     {id: 11, title: `Lumière / Ténèbre`, level: this.store.findRecord('level', 1)},
    //     {id: 12, title: `Protection contre le mal`, level: this.store.findRecord('level', 1)},
    //     {id: 13, title: `Sanctuaire`, level: this.store.findRecord('level', 1)},
    //     {id: 14, title: `Sentinelle de Helm`, level: this.store.findRecord('level', 1)},
    //     {id: 15, title: `Soins légers`, level: this.store.findRecord('level', 1)},
    //     {id: 16, title: `Altération du temps`, level: this.store.findRecord('level', 2)},
    //     {id: 17, title: `Augure`, level: this.store.findRecord('level', 2)},
    //     {id: 18, title: `Calmer les esprits`, level: this.store.findRecord('level', 2)},
    //     {id: 19, title: `Cantique`, level: this.store.findRecord('level', 2)},
    //     {id: 20, title: `Connaissance de l'alignement / Alignement indétectable`, level: this.store.findRecord('level', 2)},
    //     {id: 21, title: `Création de symbole sacré`, level: this.store.findRecord('level', 2)},
    //     {id: 22, title: `Diable de poussière`, level: this.store.findRecord('level', 2)},
    //     {id: 23, title: `Discours captivant`, level: this.store.findRecord('level', 2)},
    //     {id: 24, title: `Détection des charmes`, level: this.store.findRecord('level', 2)},
    //     {id: 25, title: `Détection des pièges`, level: this.store.findRecord('level', 2)},
    //     {id: 26, title: `Flamme`, level: this.store.findRecord('level', 2)},
    //     {id: 27, title: `Immobilisation de personnes`, level: this.store.findRecord('level', 2)},
    //     {id: 28, title: `Lame enflamée`, level: this.store.findRecord('level', 2)},
    //     {id: 29, title: `Language des animaux`, level: this.store.findRecord('level', 2)},
    //     {id: 30, title: `Marteau Spirituel`, level: this.store.findRecord('level', 2)},
    //     {id: 31, title: `Métal brûlant`, level: this.store.findRecord('level', 2)},
    //     {id: 32, title: `Peau d'écorce`, level: this.store.findRecord('level', 2)},
    //     {id: 33, title: `Piège de feu`, level: this.store.findRecord('level', 2)},
    //     {id: 34, title: `Ralentissement du poison`, level: this.store.findRecord('level', 2)},
    //     {id: 35, title: `Résistance au feu`, level: this.store.findRecord('level', 2)},
    //     {id: 36, title: `Sanctification`, level: this.store.findRecord('level', 2)},
    //     {id: 37, title: `Silence`, level: this.store.findRecord('level', 2)},
    //     {id: 38, title: `Wyverne de garde`, level: this.store.findRecord('level', 2)},
    //   ]
    // });

    return this.store.findAll('level');
  },
});
