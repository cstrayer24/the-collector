"use strict";

const { PrismaClient } = require("@prisma/client");

var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
var prismaClient_1 = new PrismaClient();
var franchiseArr = [
  {
    name: "DC",
    banner: "https://the-collector-images.s3.us-east-2.amazonaws.com/dc-banner",
  },
  {
    name: "Marvel",
    banner:
      "https://the-collector-images.s3.us-east-2.amazonaws.com/marvel-banner",
  },
  {
    name: "Star Wars",
    banner:
      "https://the-collector-images.s3.us-east-2.amazonaws.com/star-wars-banner",
  },
  {
    name: "Harry potter",
    banner:
      "https://the-collector-images.s3.us-east-2.amazonaws.com/harry-potter-banner",
  },
];
var itemArr = [
  {
    name: "mk1",
    franchise: "marvel",
    from: "iron man 1",
    price: "100K",
    timeStamp: "30 mins",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/mk1.jpg",
  },
  {
    name: "stark industries bomb",
    franchise: "marvel",
    price: "2K",
    timeStamp: "5 min",
    from: "iron man 1",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/stark-bomb.jpeg",
  },
  {
    name: "Iron monger suit",
    franchise: "marvel",
    price: "150k",
    timeStamp: "1hr 30min",
    from: "iron man 1",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/iron-monger.png",
  },
  {
    name: "Tobby Maguire's Suit",
    franchise: "marvel",
    from: "Spiderman: No Way Home",
    price: "50k",
    timeStamp: "47min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/tobeys-suit.jpeg",
  },
  {
    name: "Spider Man's Stark Suit",
    franchise: "marvel",
    from: "Spiderman: No Way Home",
    timeStamp: "50mins",
    price: "55k",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/stark-suit.png",
  },
  {
    name: "Stormbreaker",
    from: "Avengers end game",
    price: "4k",
    timeStamp: "1 hr and 10mins",
    franchise: "marvel",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/stormbreaker.jpeg",
  },
  {
    franchise: "DC",
    from: "Justice league Batman v superman",
    name: "Batman mech suit",
    price: "40k",
    timeStamp: "1hr",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/batman-mech-suit.jpeg",
  },
  {
    franchise: "DC",
    from: "Justice league Batman v superman",
    name: "supermans coffin",
    price: "100k",
    timeStamp: "2hr",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/superman-coffin.jpeg",
  },
  {
    franchise: "DC",
    from: "Justice league Batman v superman",
    name: "Kryptonite spear",
    price: "15k",
    timeStamp: "1hr",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/kryptonit-spear.png",
  },
  {
    franchise: "DC",
    from: "Dark Knight",
    name: "Bat Mobile",
    price: "100k",
    timeStamp: "10min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/batmobile.jpeg",
  },
  {
    franchise: "DC",
    from: "Dark Knight",
    name: "Jokers playing card",
    price: "1k",
    timeStamp: "1hr 20min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/joker-card.png",
  },
  {
    franchise: "DC",
    from: "flash",
    name: "Flash ring",
    price: "5k",
    timeStamp: "15min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/flash-ring.jpeg",
  },
  {
    franchise: "DC",
    from: "flash",
    name: "Flash suit",
    price: "50k",
    timeStamp: "5min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/flash-suit.jpeg",
  },
  {
    franchise: "DC",
    from: "flash",
    name: "Batflash suit",
    price: "30k",
    timeStamp: "2hr 45min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/bat-flash-suit.png",
  },
  {
    franchise: "Star wars",
    from: "New hope",
    name: "luke‘s lightsaber (green)",
    price: "75k",
    timeStamp: "5min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/lukes-saber.jpeg",
  },
  {
    franchise: "Star wars",
    from: "New hope",
    name: "R2-D2",
    price: "50k",
    timeStamp: "5min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/r2-d2.jpeg",
  },
  {
    franchise: "Star wars",
    from: "New hope",
    name: "Death star mini prop",
    price: "5k",
    timeStamp: "20min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/death-star-min.jpeg",
  },
  {
    franchise: "Star wars",
    from: "Revenge of the sith",
    name: "Darth vader mask",
    price: "25K",
    timeStamp: "2hr",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/darth-vader-mask.jpeg",
  },
  {
    franchise: "Star wars",
    from: "Revenge of the sith",
    name: "Purple lightsaber",
    price: "20K",
    timeStamp: "50min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/mace-windus-saber.png",
  },
  {
    franchise: "Star wars",
    from: "Revenge of the sith",
    name: "anakins cloak",
    price: "20k",
    timeStamp: "1hr",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/vaders-cloak.jpeg",
  },
  {
    franchise: "Star wars",
    from: "Rise of skywalkers",
    name: "KYLO rens light saber",
    price: "40k",
    timeStamp: "1hr 45min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/kylo-rens-saber.jpeg",
  },
  {
    franchise: "Star wars",
    from: "Rise of skywalkers",
    name: "KYLO rens mask",
    price: "15k",
    timeStamp: "25min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/kylo-rens-mask.jpeg",
  },
  {
    franchise: "Star wars",
    from: "Rise of skywalkers",
    name: "Lukes light saber(blue)",
    price: "100k",
    timeStamp: "1hr 45min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/lukes-blue-saber.png",
  },
  {
    franchise: "Star wars",
    from: "Rise of skywalkers",
    name: "THE George lucas",
    price: "0.65c",
    timeStamp: "all time",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/george-lucas.jpeg",
  },
  {
    franchise: "Harry potter",
    from: "Sorcerer's stone",
    name: "Harrys wand",
    price: "30k",
    timeStamp: "10min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/harrys-wand.jpeg",
  },
  {
    franchise: "Harry potter",
    from: "Sorcerer's stone",
    name: "harrys owls cage",
    price: "30k",
    timeStamp: "45min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/owl-cage.png",
  },
  {
    franchise: "Harry potter",
    from: "Sorcerer's stone",
    name: "Invisibility cloak",
    price: "100mil",
    timeStamp: "30min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/invisibility-cloak.jpeg",
  },
  {
    franchise: "Harry potter",
    from: "Rise of the phoenix",
    name: "Death eater mask",
    price: "15k",
    timeStamp: "30min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/death-eater-mask.png",
  },
  {
    franchise: "Harry potter",
    from: "Rise of the phoenix",
    name: "Harry potters glasses",
    price: "500k",
    timeStamp: "1min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/harrys-glasses.png",
  },
  {
    franchise: "Harry potter",
    from: "Rise of the phoenix",
    name: "Hall of prophecy orb",
    price: "60k",
    timeStamp: "10min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/hall-of-prophecy-orb.jpeg",
  },
  {
    franchise: "Harry potter",
    from: "Deathly hallows",
    name: "voldamorts wand",
    price: "100k",
    timeStamp: "1hr",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/voldomorts-wand.png",
  },
  {
    franchise: "Harry potter",
    from: "Deathly hallows",
    name: "The noble collection",
    price: "10k",
    timeStamp: "30min",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/the-nobel-collection.jpeg",
  },
  {
    franchise: "Harry potter",
    from: "Deathly hallows",
    name: "Death eater wand",
    price: "60k",
    timeStamp: "2hr",
    src: "https://the-collector-images.s3.us-east-2.amazonaws.com/death-eater-wand.jpeg",
  },
];
function populate() {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4 /*yield*/,
            prismaClient_1.franchise.createMany({
              data: franchiseArr,
            }),
          ];
        case 1:
          _a.sent();
          return [
            4 /*yield*/,
            prismaClient_1.item.createMany({
              data: itemArr,
            }),
          ];
        case 2:
          _a.sent();
          return [2 /*return*/];
      }
    });
  });
}
populate();
