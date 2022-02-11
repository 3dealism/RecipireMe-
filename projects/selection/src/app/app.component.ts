import {Component, OnInit, ViewChild} from '@angular/core';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatAccordion, MatExpansionPanel} from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ingredients: any =
    {
      "vegetables_greens": [
        {"name": "garlic"}, {"name": "onion"}, {"name": "carrot"}, {"name": "potato"}, {"name": "tomato"},
        {"name": "paprika"}, {"name": "chilli"}, {"name": "spring onion"}, {"name": "ginger"},
        {"name": "courgette"}, {"name": "mushroom"}, {"name": "champignion"}, {"name": "leek"},
        {"name": "cucumber"}, {"name": "spinach"}, {"name": "celery"}, {"name": "rocket"},
        {"name": "pumpkin"}, {"name": "peas"}, {"name": "avocado"}, {"name": "broccoli"},
        {"name": "eggplant"}, {"name": "green bean"}, {"name": "asparagus"}, {"name": "beetroot"},
        {"name": "fennel"}, {"name": "cauliflower"}, {"name": "rhubarb"}, {"name": "sweet potato"},
        {"name": "corn"}, {"name": "turnip cabbage"}, {"name": "white cabbage"}, {"name": "horseradish"},
        {"name": "lamb's lettuce"}, {"name": "savoy cabbage"}, {"name": "stone mushroom"},
        {"name": "chanterelles"}, {"name": "Brussels sprouts"}, {"name": "red cabbage"},
        {"name": "white beans"}, {"name": "lettuce"}, {"name": "iceberg lettuce"},
        {"name": "china cabbage"}, {"name": "parsnip"}, {"name": "artichoke"},
        {"name": "mangold"}, {"name": "chicoree"}, {"name": "kale"}, {"name": "shitake mushrooms"},
        {"name": "soy sprouts"}, {"name": "oyster mushrooms"}, {"name": "butternut pumpkin"},
        {"name": "kidney beans"}, {"name": "pak choi"}, {"name": "bamboo sprouts"}
      ],
      "fruits": [
        {"name": "lemons"}, {"name": "apples"}, {"name": "limes"}, {"name": "oranges"}, {"name": "bananas"},
        {"name": "mango"}, {"name": "pears"}, {"name": "apricots"}, {"name": "pineapples"},
        {"name": "peaches"}, {"name": "dates"}, {"name": "figs"}, {"name": "plums"},
        {"name": "mandarins"}, {"name": "pomegranate"}, {"name": "kiwi"}, {"name": "watermelons"},
        {"name": "honeydew melon"}, {"name": "grapefruit"}, {"name": "grapes"}, {"name": "nectarines"},
        {"name": "papaya"}, {"name": "quinces"}, {"name": "maracuja"}, {"name": "kumquats"},
        {"name": "mirabelles"}, {"name": "kaki"}, {"name": "lychee"}, {"name": "starfruit"},
        {"name": "plantain"}, {"name": "jackfruit"}, {"name": "guave"}, {"name": "coconut"},
        {"name": "pomelo"}
      ],
      "meat_fish": [
        {"name": "chicken"}, {"name": "beef"}, {"name": "turkey"}, {"name": "veal"}, {"name": "lamb"},
        {"name": "ham"}, {"name": "bacon"}, {"name": "chicken breast"}, {"name": "beef fillet"},
        {"name": "turkey breast"}, {"name": "chicken thighs"}, {"name": "veal fillet"}, {"name": "steak"},
        {"name": "salami"}, {"name": "sucuk"}, {"name": "sausage"}, {"name": "turkey schnitzel"},
        {"name": "beef rump steak"}, {"name": "duck breast fillet"}, {"name": "minced meat"}, {"name": "roast beef"},
        {"name": "chicken wings"}, {"name": "green bean"}, {"name": "asparagus"}, {"name": "beetroot"},
        {"name": "goose"}, {"name": "rabbit"}, {"name": "beef roulades"}, {"name": "lamb chops"},
        {"name": "shrimps"}, {"name": "salmon fillet"}, {"name": "tuna"}, {"name": "smoked salmon"},
        {"name": "trout"}, {"name": "anchovies"}, {"name": "shells"},
        {"name": "zander"}, {"name": "pollock"}, {"name": "scallops"},
        {"name": "squid"}, {"name": "salmon trout"}, {"name": "redfish fillet"},
        {"name": "dorade"}, {"name": "plaice"}, {"name": "wild salmon"},
        {"name": "pangasius"}, {"name": "carp"}, {"name": "sea bass"}, {"name": "mackerel"},
        {"name": "halibut"}, {"name": "lobster"}, {"name": "sardines"},
        {"name": "pike"}, {"name": "oyster"}, {"name": "haddock"},
        {"name": "fish fingers"}, {"name": "calamari"}, {"name": "red snapper"}, {"name": "bakefish"}
      ],
      "cereals_grains": [
        {"name": "spaghetti"}, {"name": "noodles"}, {"name": "rice"}, {"name": "ribbon noodles"}, {"name": "basmati rice"},
        {"name": "jasmin rice"}, {"name": "risotto rice"}, {"name": "chickpeas"}, {"name": "lentils"},
        {"name": "couscous"}, {"name": "lasagne sheets"}, {"name": "red lentils"}, {"name": "yellow lentils"},
        {"name": "quinoa"}, {"name": "polenta"}, {"name": "rice noodles"}, {"name": "glass noodles"},
        {"name": "rice pudding"}, {"name": "gnocchi"}, {"name": "bulgur"}, {"name": "tortellini"},
        {"name": "spaetzle"}, {"name": "brown rice"}, {"name": "black rice"}, {"name": "millet"},
        {"name": "goose"}, {"name": "wild rice"}, {"name": "buckwheat"}, {"name": "cannelloni"},
        {"name": "dumplings"}, {"name": "almonds"}, {"name": "walnuts"}, {"name": "pine nuts"},
        {"name": "hazelnuts"}, {"name": "sesame"}, {"name": "pistachios"},
        {"name": "pumpkin seeds"}, {"name": "cashews"}, {"name": "sunflower seeds"},
        {"name": "peanuts"}, {"name": "chia seeds"}
      ],
      "dairy_nodairy": [
        {"name": "eggs"}, {"name": "butter"}, {"name": "milk"}, {"name": "cream"}, {"name": "whipped cream"},
        {"name": "parmesan"}, {"name": "curd"}, {"name": "yoghurt"}, {"name": "creme fraiche"},
        {"name": "margarine"}, {"name": "cream cheese"}, {"name": "sour cream"}, {"name": "cheddar"},
        {"name": "mozzarella"}, {"name": "feta"}, {"name": "gouda"}, {"name": "mascarpone"},
        {"name": "buttermilk"}, {"name": "emmental"}, {"name": "ricotta"}, {"name": "goat cheese"},
        {"name": "gorgonzola"}, {"name": "ice cream"}, {"name": "pecorino"}, {"name": "soft cheese"},
        {"name": "gruyere"}, {"name": "halloumi"}, {"name": "grana padano"}, {"name": "edam"},
        {"name": "provolone"}, {"name": "coconut milk"}, {"name": "tofu"}, {"name": "almond milk"},
        {"name": "soy milk"}, {"name": "soy cream"}, {"name": "oat milk"},
        {"name": "rice milk"}, {"name": "seitan"}, {"name": "egg substitute"},
        {"name": "falafel"}
      ],
      "herbs_spices": [
        {"name": "parsley"}, {"name": "vegetable broth"}, {"name": "cinnamon"}, {"name": "nutmeg"}, {"name": "basil"},
        {"name": "thyme"}, {"name": "paprike spice"}, {"name": "chives"}, {"name": "rosemary"},
        {"name": "coriander"}, {"name": "bay leaf"}, {"name": "oregano"}, {"name": "mint"},
        {"name": "curry powder"}, {"name": "dill"}, {"name": "pepper"}, {"name": "cumin"},
        {"name": "poultry broth"}, {"name": "majoram"}, {"name": "turmeric"}, {"name": "chilli powder"},
        {"name": "meat broth"}, {"name": "sage"}, {"name": "cardamom"}, {"name": "pimento"},
        {"name": "cress"}, {"name": "saffron"}, {"name": "beef stock"}, {"name": "lemongrass"},
        {"name": "gingerbread spice"}, {"name": "red curry paste"}, {"name": "savory"}, {"name": "yellow curry paste"},
        {"name": "green curry paste"}
      ],
      "tins_preserves": [
        {"name": "tomato paste"}, {"name": "olives"}, {"name": "capers"}, {"name": "strained tomatoes"}, {"name": "gherkins"},
        {"name": "sauerkraut"}, {"name": "corn"}, {"name": "kidney beans"}, {"name": "chutney"},
        {"name": "hummus"}, {"name": "tomato peppers"}, {"name": "vine leaves"}, {"name": "baked beans"},
        {"name": "peas & carrots"}
      ]
    }

  selectedIngredients: any = [];

  ngOnInit(): void {
  }

  expandPanel(matExpansionPanel: MatExpansionPanel, event: any) {
    event.stopPropagation();

    if (!this._isExpansionIndicator(event.target)) {
      matExpansionPanel.close();
    }
  }

  private _isExpansionIndicator(target: EventTarget | any): boolean {
    const expansionIndicatorClass = "mat-expansion-indicator";
    return (
      target.classList && target.classList.contains(expansionIndicatorClass)
    );
  }

  addSelectedIngredient(item: string) {
    const index: number = this.selectedIngredients.indexOf(item);
    if (index !== -1) {
      this.selectedIngredients.splice(index, 1);
    } else {
      this.selectedIngredients.push(item);
    }
    console.log(this.selectedIngredients);
  }

  submitIngredients() {
    let ingredientsStitch: string = '';
    for (let i = 0; i < this.selectedIngredients.length; i++) {
      ingredientsStitch += this.selectedIngredients[i].name + ', ';
    }
    const ingredients = ingredientsStitch.slice(0, ingredientsStitch.length - 2);
    console.log(ingredients);
    const parentApp = window.parent;
    // parentApp.frames[1].postMessage(ingredients, 'http://localhost:4202');
    parentApp.postMessage(ingredients, 'http://localhost:4202');
  }
}
