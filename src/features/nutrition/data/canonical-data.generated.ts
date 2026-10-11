/**
 * AUTO-GENERATED FROM food-data/ CANONICAL DATASETS.
 * DO NOT EDIT DIRECTLY.
 * Source of Truth:
 * - food-data/Master-Food-Catalog-FINAL.csv (626 foods)
 * - food-data/Ingredient-Master-FINAL.csv (222 ingredients)
 * - food-data/Food-Ingredient-Mapping-FINAL.csv (1748 mappings)
 * - food-data/Visual-Selection-FINAL.csv (626 visual entries)
 */

import { Food } from '../models';

export interface CanonicalIngredient {
  id: string;
  nameFa: string;
  aliasesFa: string[];
  category: string;
}

export interface CanonicalVisualSelection {
  foodId: string;
  visualPriority: 'A' | 'B' | 'C';
  visualType: 'dedicated' | 'generic';
}

export const CANONICAL_FOOD_COUNT = 626;
export const CANONICAL_INGREDIENT_COUNT = 222;
export const CANONICAL_MAPPING_COUNT = 1748;

export const CANONICAL_INGREDIENTS: CanonicalIngredient[] = [
  {
    "id": "ING-001",
    "nameFa": "گوشت گوسفندی",
    "aliasesFa": [
      "گوشت گوسفند",
      "گوشت راسته",
      "گوشت فیله",
      "گوشت برگ",
      "گوشت دنده",
      "ماهیچه گوسفند"
    ],
    "category": "گوشت قرمز"
  },
  {
    "id": "ING-002",
    "nameFa": "گوشت گاو",
    "aliasesFa": [
      "گوشت گاو"
    ],
    "category": "گوشت قرمز"
  },
  {
    "id": "ING-003",
    "nameFa": "گوشت چرخ کرده",
    "aliasesFa": [
      "گوشت همبرگری"
    ],
    "category": "گوشت قرمز"
  },
  {
    "id": "ING-004",
    "nameFa": "دل و جگر",
    "aliasesFa": [
      "دل",
      "جگر",
      "قلوه"
    ],
    "category": "گوشت قرمز"
  },
  {
    "id": "ING-005",
    "nameFa": "زبان گوسفند",
    "aliasesFa": [
      "زبان"
    ],
    "category": "گوشت قرمز"
  },
  {
    "id": "ING-006",
    "nameFa": "پاچه",
    "aliasesFa": [
      "پاچه گوسفند"
    ],
    "category": "گوشت قرمز"
  },
  {
    "id": "ING-007",
    "nameFa": "مغز",
    "aliasesFa": [
      "مغز گوسفند"
    ],
    "category": "گوشت قرمز"
  },
  {
    "id": "ING-008",
    "nameFa": "سوسیس گوشت",
    "aliasesFa": [
      "سوسیس"
    ],
    "category": "فرآورده گوشتی"
  },
  {
    "id": "ING-009",
    "nameFa": "کالباس گوشت",
    "aliasesFa": [
      "کالباس"
    ],
    "category": "فرآورده گوشتی"
  },
  {
    "id": "ING-010",
    "nameFa": "ژامبون",
    "aliasesFa": [
      "ژامبون"
    ],
    "category": "فرآورده گوشتی"
  },
  {
    "id": "ING-011",
    "nameFa": "بیکن",
    "aliasesFa": [
      "بیکن"
    ],
    "category": "فرآورده گوشتی"
  },
  {
    "id": "ING-012",
    "nameFa": "پپرونی",
    "aliasesFa": [
      "پپرونی"
    ],
    "category": "فرآورده گوشتی"
  },
  {
    "id": "ING-013",
    "nameFa": "گوشت رست بیف",
    "aliasesFa": [
      "رست بیف"
    ],
    "category": "گوشت قرمز"
  },
  {
    "id": "ING-014",
    "nameFa": "ناگت مرغ",
    "aliasesFa": [
      "ناگت"
    ],
    "category": "فرآورده مرغ"
  },
  {
    "id": "ING-015",
    "nameFa": "شنیسل مرغ",
    "aliasesFa": [
      "شنیسل"
    ],
    "category": "فرآورده مرغ"
  },
  {
    "id": "ING-016",
    "nameFa": "مرغ",
    "aliasesFa": [
      "سینه مرغ",
      "ران مرغ",
      "بال مرغ",
      "فیله مرغ",
      "مرغ چرخ کرده"
    ],
    "category": "مرغ"
  },
  {
    "id": "ING-017",
    "nameFa": "بوقلمون",
    "aliasesFa": [
      "سینه بوقلمون"
    ],
    "category": "مرغ"
  },
  {
    "id": "ING-018",
    "nameFa": "ماهی",
    "aliasesFa": [
      "ماهی سفید",
      "ماهی قزل آلا",
      "ماهی کیلکا",
      "ماهی حلوا",
      "ماهی شیر",
      "ماهی تن",
      "ماهی سالمون",
      "ماهی دودی",
      "قزل آلا",
      "سالمون"
    ],
    "category": "ماهی و دریایی"
  },
  {
    "id": "ING-019",
    "nameFa": "میگو",
    "aliasesFa": [
      "میگو"
    ],
    "category": "ماهی و دریایی"
  },
  {
    "id": "ING-020",
    "nameFa": "خرچنگ",
    "aliasesFa": [
      "خرچنگ"
    ],
    "category": "ماهی و دریایی"
  },
  {
    "id": "ING-021",
    "nameFa": "ماهی آنچوی",
    "aliasesFa": [
      "آنچوی"
    ],
    "category": "ماهی و دریایی"
  },
  {
    "id": "ING-022",
    "nameFa": "جلبک",
    "aliasesFa": [
      "جلبک دریایی"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-023",
    "nameFa": "تخم مرغ",
    "aliasesFa": [
      "زرده تخم مرغ",
      "سفیده تخم مرغ"
    ],
    "category": "تخم مرغ"
  },
  {
    "id": "ING-024",
    "nameFa": "لوبیا",
    "aliasesFa": [
      "لوبیا قرمز",
      "لوبیا چیتی",
      "لوبیا سبز",
      "لوبیا چشم بلبلی"
    ],
    "category": "حبوبات"
  },
  {
    "id": "ING-025",
    "nameFa": "نخود",
    "aliasesFa": [
      "نخودچی",
      "نخود سبز",
      "نخود فرنگی"
    ],
    "category": "حبوبات"
  },
  {
    "id": "ING-026",
    "nameFa": "عدس",
    "aliasesFa": [
      "عدس"
    ],
    "category": "حبوبات"
  },
  {
    "id": "ING-027",
    "nameFa": "لپه",
    "aliasesFa": [
      "لپه"
    ],
    "category": "حبوبات"
  },
  {
    "id": "ING-028",
    "nameFa": "ماش",
    "aliasesFa": [
      "ماش"
    ],
    "category": "حبوبات"
  },
  {
    "id": "ING-029",
    "nameFa": "باقلا",
    "aliasesFa": [
      "باقلا خشک"
    ],
    "category": "حبوبات"
  },
  {
    "id": "ING-030",
    "nameFa": "سویا",
    "aliasesFa": [
      "سویا"
    ],
    "category": "حبوبات"
  },
  {
    "id": "ING-031",
    "nameFa": "برنج",
    "aliasesFa": [
      "برنج سفید",
      "برنج قهوه ای",
      "برنج دم سیاه",
      "برنج طارم",
      "برنج صدری"
    ],
    "category": "غلات"
  },
  {
    "id": "ING-032",
    "nameFa": "گندم",
    "aliasesFa": [
      "بلغور",
      "بلغور گندم"
    ],
    "category": "غلات"
  },
  {
    "id": "ING-033",
    "nameFa": "جو",
    "aliasesFa": [
      "جو پرک"
    ],
    "category": "غلات"
  },
  {
    "id": "ING-034",
    "nameFa": "رشته",
    "aliasesFa": [
      "رشته آشی",
      "رشته پلویی"
    ],
    "category": "غلات"
  },
  {
    "id": "ING-035",
    "nameFa": "ماکارونی",
    "aliasesFa": [
      "اسپاگتی",
      "پنه",
      "فارفاله",
      "لازانیا",
      "فتوچینی",
      "نودل"
    ],
    "category": "غلات"
  },
  {
    "id": "ING-036",
    "nameFa": "کینوا",
    "aliasesFa": [
      "کینوا"
    ],
    "category": "غلات"
  },
  {
    "id": "ING-037",
    "nameFa": "آرد",
    "aliasesFa": [
      "آرد گندم",
      "آرد برنج",
      "آرد نخود",
      "آرد سبوس دار",
      "آرد جو"
    ],
    "category": "غلات"
  },
  {
    "id": "ING-038",
    "nameFa": "نان",
    "aliasesFa": [
      "نان باگت",
      "نان تست",
      "نان همبرگری",
      "نان تاکو"
    ],
    "category": "نان"
  },
  {
    "id": "ING-039",
    "nameFa": "سیب زمینی",
    "aliasesFa": [
      "سیب زمینی"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-040",
    "nameFa": "پیاز",
    "aliasesFa": [
      "پیاز خشک"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-041",
    "nameFa": "سیر",
    "aliasesFa": [
      "سیر خشک",
      "موسیر"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-042",
    "nameFa": "هویج",
    "aliasesFa": [
      "هویج"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-043",
    "nameFa": "گوجه فرنگی",
    "aliasesFa": [
      "گوجه"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-044",
    "nameFa": "خیار",
    "aliasesFa": [
      "خیارشور"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-045",
    "nameFa": "بادمجان",
    "aliasesFa": [
      "بادمجان سرخ شده"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-046",
    "nameFa": "کدو",
    "aliasesFa": [
      "کدو سبز",
      "کدو حلوایی"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-047",
    "nameFa": "فلفل دلمه",
    "aliasesFa": [
      "فلفل تند",
      "فلفل"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-048",
    "nameFa": "کلم",
    "aliasesFa": [
      "کلم بروکلی",
      "کلم پیچ"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-049",
    "nameFa": "کاهو",
    "aliasesFa": [
      "کاهو"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-050",
    "nameFa": "اسفناج",
    "aliasesFa": [
      "اسفناج"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-051",
    "nameFa": "نعنا",
    "aliasesFa": [
      "نعنا"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-052",
    "nameFa": "جعفری",
    "aliasesFa": [
      "جعفری"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-053",
    "nameFa": "شوید",
    "aliasesFa": [
      "شوید"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-054",
    "nameFa": "گشنیز",
    "aliasesFa": [
      "گشنیز"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-055",
    "nameFa": "تره",
    "aliasesFa": [
      "تره"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-056",
    "nameFa": "ریحان",
    "aliasesFa": [
      "ریحان"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-057",
    "nameFa": "سبزی قورمه",
    "aliasesFa": [
      "سبزی قورمه"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-058",
    "nameFa": "سبزی خوردن",
    "aliasesFa": [
      "سبزی خوردن",
      "سبزی",
      "پیازچه"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-059",
    "nameFa": "قارچ",
    "aliasesFa": [
      "قارچ"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-060",
    "nameFa": "ذرت",
    "aliasesFa": [
      "ذرت بوداده"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-061",
    "nameFa": "چغندر",
    "aliasesFa": [
      "چغندر"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-062",
    "nameFa": "شلغم",
    "aliasesFa": [
      "شلغم"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-063",
    "nameFa": "ترب",
    "aliasesFa": [
      "تربچه"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-064",
    "nameFa": "کرفس",
    "aliasesFa": [
      "کرفس"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-065",
    "nameFa": "مارچوبه",
    "aliasesFa": [
      "مارچوبه"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-066",
    "nameFa": "بامیه",
    "aliasesFa": [
      "بامیه"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-067",
    "nameFa": "زیتون",
    "aliasesFa": [
      "زیتون سبز",
      "زیتون سیاه"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-068",
    "nameFa": "جوانه یونجه",
    "aliasesFa": [
      "جوانه"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-069",
    "nameFa": "ریواس",
    "aliasesFa": [
      "ریواس"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-070",
    "nameFa": "کنگر",
    "aliasesFa": [
      "کنگر"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-071",
    "nameFa": "غوره",
    "aliasesFa": [
      "غوره"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-072",
    "nameFa": "نارنج",
    "aliasesFa": [
      "پوست پرتقال"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-073",
    "nameFa": "ترخینه",
    "aliasesFa": [
      "ترخینه"
    ],
    "category": "سبزیجات"
  },
  {
    "id": "ING-074",
    "nameFa": "سیب",
    "aliasesFa": [
      "سیب"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-075",
    "nameFa": "پرتقال",
    "aliasesFa": [
      "پرتقال"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-076",
    "nameFa": "نارنگی",
    "aliasesFa": [
      "نارنگی"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-077",
    "nameFa": "گریپ فروت",
    "aliasesFa": [
      "گریپ فروت"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-078",
    "nameFa": "لیمو",
    "aliasesFa": [
      "لیمو ترش",
      "لیمو شیرین",
      "آبلیمو"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-079",
    "nameFa": "موز",
    "aliasesFa": [
      "موز"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-080",
    "nameFa": "انگور",
    "aliasesFa": [
      "انگور"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-081",
    "nameFa": "هندوانه",
    "aliasesFa": [
      "هندوانه"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-082",
    "nameFa": "طالبی",
    "aliasesFa": [
      "طالبی"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-083",
    "nameFa": "خربزه",
    "aliasesFa": [
      "خربزه"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-084",
    "nameFa": "توت فرنگی",
    "aliasesFa": [
      "توت فرنگی"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-085",
    "nameFa": "گیلاس",
    "aliasesFa": [
      "گیلاس"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-086",
    "nameFa": "آلبالو",
    "aliasesFa": [
      "آلبالو"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-087",
    "nameFa": "هلو",
    "aliasesFa": [
      "شلیل"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-088",
    "nameFa": "زردآلو",
    "aliasesFa": [
      "قیسی"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-089",
    "nameFa": "آلو",
    "aliasesFa": [
      "آلو بخارا",
      "آلوچه"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-090",
    "nameFa": "گلابی",
    "aliasesFa": [
      "گلابی"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-091",
    "nameFa": "به",
    "aliasesFa": [
      "به"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-092",
    "nameFa": "انار",
    "aliasesFa": [
      "انار"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-093",
    "nameFa": "خرمالو",
    "aliasesFa": [
      "خرمالو"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-094",
    "nameFa": "انجیر",
    "aliasesFa": [
      "انجیر"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-095",
    "nameFa": "کیوی",
    "aliasesFa": [
      "کیوی طلایی"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-096",
    "nameFa": "آناناس",
    "aliasesFa": [
      "آناناس"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-097",
    "nameFa": "انبه",
    "aliasesFa": [
      "انبه"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-098",
    "nameFa": "نارگیل",
    "aliasesFa": [
      "نارگیل"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-099",
    "nameFa": "توت",
    "aliasesFa": [
      "توت سفید",
      "شاتوت"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-100",
    "nameFa": "بلوبری",
    "aliasesFa": [
      "بلوبری"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-101",
    "nameFa": "تمشک",
    "aliasesFa": [
      "تمشک"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-102",
    "nameFa": "ازگیل",
    "aliasesFa": [
      "ازگیل"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-103",
    "nameFa": "زالزالک",
    "aliasesFa": [
      "زالزالک"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-104",
    "nameFa": "عناب",
    "aliasesFa": [
      "عناب"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-105",
    "nameFa": "کنار",
    "aliasesFa": [
      "کنار"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-106",
    "nameFa": "خرما",
    "aliasesFa": [
      "خرما"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-107",
    "nameFa": "زرشک",
    "aliasesFa": [
      "زرشک"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-108",
    "nameFa": "آووکادو",
    "aliasesFa": [
      "آووکادو"
    ],
    "category": "میوه ها"
  },
  {
    "id": "ING-109",
    "nameFa": "کشمش",
    "aliasesFa": [
      "انگور خشک"
    ],
    "category": "میوه خشک"
  },
  {
    "id": "ING-110",
    "nameFa": "شیر",
    "aliasesFa": [
      "شیر پر چرب",
      "شیر کم چرب",
      "شیر خشک",
      "شیر غنی شده"
    ],
    "category": "لبنیات"
  },
  {
    "id": "ING-111",
    "nameFa": "ماست",
    "aliasesFa": [
      "ماست چکیده",
      "ماست یونانی"
    ],
    "category": "لبنیات"
  },
  {
    "id": "ING-112",
    "nameFa": "پنیر",
    "aliasesFa": [
      "پنیر سفید",
      "پنیر لیقوان",
      "پنیر پیتزا",
      "پنیر خامه ای",
      "پنیر فتا",
      "پنیر پارمزان"
    ],
    "category": "لبنیات"
  },
  {
    "id": "ING-113",
    "nameFa": "کره",
    "aliasesFa": [
      "کره گیاهی"
    ],
    "category": "لبنیات"
  },
  {
    "id": "ING-114",
    "nameFa": "خامه",
    "aliasesFa": [
      "سرشیر"
    ],
    "category": "لبنیات"
  },
  {
    "id": "ING-115",
    "nameFa": "دوغ",
    "aliasesFa": [
      "دوغ گازدار"
    ],
    "category": "لبنیات"
  },
  {
    "id": "ING-116",
    "nameFa": "کشک",
    "aliasesFa": [
      "کشک"
    ],
    "category": "لبنیات"
  },
  {
    "id": "ING-117",
    "nameFa": "بستنی",
    "aliasesFa": [
      "بستنی"
    ],
    "category": "لبنیات"
  },
  {
    "id": "ING-118",
    "nameFa": "ماسکارپونه",
    "aliasesFa": [
      "ماسکارپونه"
    ],
    "category": "لبنیات"
  },
  {
    "id": "ING-119",
    "nameFa": "آب مرغ",
    "aliasesFa": [
      "آب مرغ"
    ],
    "category": "لبنیات"
  },
  {
    "id": "ING-120",
    "nameFa": "گردو",
    "aliasesFa": [
      "گردو"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-121",
    "nameFa": "بادام",
    "aliasesFa": [
      "بادام"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-122",
    "nameFa": "بادام هندی",
    "aliasesFa": [
      "بادام هندی"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-123",
    "nameFa": "بادام زمینی",
    "aliasesFa": [
      "بادام زمینی"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-124",
    "nameFa": "پسته",
    "aliasesFa": [
      "پسته"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-125",
    "nameFa": "فندق",
    "aliasesFa": [
      "فندق"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-126",
    "nameFa": "کنجد",
    "aliasesFa": [
      "کنجد"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-127",
    "nameFa": "ارده",
    "aliasesFa": [
      "ارده"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-128",
    "nameFa": "تخمه",
    "aliasesFa": [
      "تخمه آفتابگردان",
      "تخمه کدو",
      "تخمه هندوانه",
      "تخمه ژاپنی"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-129",
    "nameFa": "چیا",
    "aliasesFa": [
      "چیا"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-130",
    "nameFa": "کتان",
    "aliasesFa": [
      "کتان"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-131",
    "nameFa": "شاهدانه",
    "aliasesFa": [
      "شاهدانه"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-132",
    "nameFa": "کره بادام زمینی",
    "aliasesFa": [],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-133",
    "nameFa": "بلوط",
    "aliasesFa": [
      "بلوط"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-134",
    "nameFa": "پسته کوهی",
    "aliasesFa": [
      "بنه"
    ],
    "category": "مغزها و دانه ها"
  },
  {
    "id": "ING-135",
    "nameFa": "انجیر خشک",
    "aliasesFa": [
      "انجیر خشک"
    ],
    "category": "میوه خشک"
  },
  {
    "id": "ING-136",
    "nameFa": "آلو خشک",
    "aliasesFa": [
      "آلو خشک"
    ],
    "category": "میوه خشک"
  },
  {
    "id": "ING-137",
    "nameFa": "زردآلو خشک",
    "aliasesFa": [
      "زردآلو خشک"
    ],
    "category": "میوه خشک"
  },
  {
    "id": "ING-138",
    "nameFa": "هلو خشک",
    "aliasesFa": [
      "هلو خشک"
    ],
    "category": "میوه خشک"
  },
  {
    "id": "ING-139",
    "nameFa": "سیب خشک",
    "aliasesFa": [
      "سیب خشک"
    ],
    "category": "میوه خشک"
  },
  {
    "id": "ING-140",
    "nameFa": "آلبالو خشک",
    "aliasesFa": [
      "آلبالو خشک"
    ],
    "category": "میوه خشک"
  },
  {
    "id": "ING-141",
    "nameFa": "گیلاس خشک",
    "aliasesFa": [
      "گیلاس خشک"
    ],
    "category": "میوه خشک"
  },
  {
    "id": "ING-142",
    "nameFa": "کیوی خشک",
    "aliasesFa": [
      "کیوی خشک"
    ],
    "category": "میوه خشک"
  },
  {
    "id": "ING-143",
    "nameFa": "آناناس خشک",
    "aliasesFa": [
      "آناناس خشک"
    ],
    "category": "میوه خشک"
  },
  {
    "id": "ING-144",
    "nameFa": "انبه خشک",
    "aliasesFa": [
      "انبه خشک"
    ],
    "category": "میوه خشک"
  },
  {
    "id": "ING-145",
    "nameFa": "پرتقال خشک",
    "aliasesFa": [
      "پرتقال خشک"
    ],
    "category": "میوه خشک"
  },
  {
    "id": "ING-146",
    "nameFa": "میوه خشک",
    "aliasesFa": [
      "میوه خشک"
    ],
    "category": "میوه خشک"
  },
  {
    "id": "ING-147",
    "nameFa": "چیپس",
    "aliasesFa": [
      "چیپس سیب زمینی"
    ],
    "category": "تنقلات"
  },
  {
    "id": "ING-148",
    "nameFa": "پفک",
    "aliasesFa": [
      "پفک"
    ],
    "category": "تنقلات"
  },
  {
    "id": "ING-149",
    "nameFa": "اسنک",
    "aliasesFa": [
      "اسنک"
    ],
    "category": "تنقلات"
  },
  {
    "id": "ING-150",
    "nameFa": "کراکر",
    "aliasesFa": [
      "کراکر"
    ],
    "category": "تنقلات"
  },
  {
    "id": "ING-151",
    "nameFa": "بیسکویت",
    "aliasesFa": [
      "بیسکویت ساده",
      "بیسکویت کرمدار"
    ],
    "category": "تنقلات"
  },
  {
    "id": "ING-152",
    "nameFa": "ویفر",
    "aliasesFa": [
      "ویفر"
    ],
    "category": "تنقلات"
  },
  {
    "id": "ING-153",
    "nameFa": "شکلات",
    "aliasesFa": [
      "شکلات تخته ای",
      "شکلات صبحانه"
    ],
    "category": "تنقلات"
  },
  {
    "id": "ING-154",
    "nameFa": "نوتلا",
    "aliasesFa": [
      "نوتلا"
    ],
    "category": "تنقلات"
  },
  {
    "id": "ING-155",
    "nameFa": "آجیل مخلوط",
    "aliasesFa": [
      "آجیل"
    ],
    "category": "تنقلات"
  },
  {
    "id": "ING-156",
    "nameFa": "لواشک",
    "aliasesFa": [
      "ترشک",
      "آلوچه"
    ],
    "category": "تنقلات"
  },
  {
    "id": "ING-157",
    "nameFa": "چیپس ذرت",
    "aliasesFa": [
      "ناچو"
    ],
    "category": "تنقلات"
  },
  {
    "id": "ING-158",
    "nameFa": "آب",
    "aliasesFa": [
      "آب معدنی"
    ],
    "category": "نوشیدنی ها"
  },
  {
    "id": "ING-159",
    "nameFa": "چای",
    "aliasesFa": [
      "چای سبز",
      "چای سیاه"
    ],
    "category": "نوشیدنی ها"
  },
  {
    "id": "ING-160",
    "nameFa": "قهوه",
    "aliasesFa": [
      "اسپرسو",
      "کاپوچینو",
      "لاته",
      "آمریکانو"
    ],
    "category": "نوشیدنی ها"
  },
  {
    "id": "ING-161",
    "nameFa": "شیرکاکائو",
    "aliasesFa": [
      "شیرکاکائو"
    ],
    "category": "نوشیدنی ها"
  },
  {
    "id": "ING-162",
    "nameFa": "شیر موز",
    "aliasesFa": [
      "شیر موز"
    ],
    "category": "نوشیدنی ها"
  },
  {
    "id": "ING-163",
    "nameFa": "شیر توت فرنگی",
    "aliasesFa": [
      "شیر توت فرنگی"
    ],
    "category": "نوشیدنی ها"
  },
  {
    "id": "ING-164",
    "nameFa": "آب میوه",
    "aliasesFa": [
      "آب پرتقال",
      "آب سیب",
      "آب هویج",
      "آب انار",
      "آب انگور",
      "آب لیمو",
      "آب آلبالو",
      "آب نارگیل"
    ],
    "category": "نوشیدنی ها"
  },
  {
    "id": "ING-165",
    "nameFa": "شربت",
    "aliasesFa": [
      "شربت آلبالو",
      "شربت سکنجبین",
      "شربت بیدمشک",
      "شربت بهارنارنج",
      "شربت زعفران",
      "شربت خاکشیر",
      "شربت تخم شربتی",
      "لیموناد"
    ],
    "category": "نوشیدنی ها"
  },
  {
    "id": "ING-166",
    "nameFa": "نوشابه",
    "aliasesFa": [
      "نوشابه رژیمی",
      "ماءالشعیر"
    ],
    "category": "نوشیدنی ها"
  },
  {
    "id": "ING-167",
    "nameFa": "اسموتی",
    "aliasesFa": [
      "اسموتی"
    ],
    "category": "نوشیدنی ها"
  },
  {
    "id": "ING-168",
    "nameFa": "عرق",
    "aliasesFa": [
      "عرق نعنا",
      "عرق بیدمشک",
      "عرق بهارنارنج"
    ],
    "category": "نوشیدنی ها"
  },
  {
    "id": "ING-169",
    "nameFa": "گلاب",
    "aliasesFa": [
      "گلاب"
    ],
    "category": "نوشیدنی ها"
  },
  {
    "id": "ING-170",
    "nameFa": "دمنوش",
    "aliasesFa": [
      "دمنوش نعنا",
      "دمنوش بابونه",
      "دمنوش گل گاوزبان",
      "دمنوش بهارنارنج",
      "دمنوش دارچین"
    ],
    "category": "نوشیدنی ها"
  },
  {
    "id": "ING-171",
    "nameFa": "شیره",
    "aliasesFa": [
      "شیره انگور",
      "شیره خرما"
    ],
    "category": "شیرین کننده"
  },
  {
    "id": "ING-172",
    "nameFa": "مربا",
    "aliasesFa": [
      "مربا آلبالو",
      "مربا توت فرنگی",
      "مربا هویج",
      "مربا بالنگ",
      "مربا گل محمدی"
    ],
    "category": "مواد پایه"
  },
  {
    "id": "ING-173",
    "nameFa": "ترشی",
    "aliasesFa": [
      "ترشی خیار",
      "ترشی مخلوط",
      "ترشی سیر",
      "ترشی بادمجان",
      "ترشی لیته"
    ],
    "category": "مواد پایه"
  },
  {
    "id": "ING-174",
    "nameFa": "روغن",
    "aliasesFa": [
      "روغن مایع",
      "روغن زیتون",
      "روغن کنجد",
      "روغن حیوانی",
      "روغن نارگیل"
    ],
    "category": "روغن"
  },
  {
    "id": "ING-175",
    "nameFa": "نمک",
    "aliasesFa": [
      "نمک"
    ],
    "category": "چاشنی"
  },
  {
    "id": "ING-176",
    "nameFa": "شکر",
    "aliasesFa": [
      "شکر"
    ],
    "category": "شیرین کننده"
  },
  {
    "id": "ING-177",
    "nameFa": "عسل",
    "aliasesFa": [
      "عسل"
    ],
    "category": "شیرین کننده"
  },
  {
    "id": "ING-178",
    "nameFa": "سرکه",
    "aliasesFa": [
      "سرکه سیب"
    ],
    "category": "چاشنی"
  },
  {
    "id": "ING-179",
    "nameFa": "لیمو عمانی",
    "aliasesFa": [
      "لیمو عمانی"
    ],
    "category": "چاشنی"
  },
  {
    "id": "ING-180",
    "nameFa": "زعفران",
    "aliasesFa": [
      "زعفران"
    ],
    "category": "ادویه"
  },
  {
    "id": "ING-181",
    "nameFa": "زردچوبه",
    "aliasesFa": [
      "زردچوبه"
    ],
    "category": "ادویه"
  },
  {
    "id": "ING-182",
    "nameFa": "دارچین",
    "aliasesFa": [
      "دارچین"
    ],
    "category": "ادویه"
  },
  {
    "id": "ING-183",
    "nameFa": "فلفل",
    "aliasesFa": [
      "فلفل سیاه",
      "فلفل قرمز"
    ],
    "category": "ادویه"
  },
  {
    "id": "ING-184",
    "nameFa": "سماق",
    "aliasesFa": [
      "سماق"
    ],
    "category": "ادویه"
  },
  {
    "id": "ING-185",
    "nameFa": "آویشن",
    "aliasesFa": [
      "آویشن"
    ],
    "category": "ادویه"
  },
  {
    "id": "ING-186",
    "nameFa": "پودر سیر",
    "aliasesFa": [
      "سیر خشک"
    ],
    "category": "ادویه"
  },
  {
    "id": "ING-187",
    "nameFa": "پودر پیاز",
    "aliasesFa": [
      "پیاز خشک"
    ],
    "category": "ادویه"
  },
  {
    "id": "ING-188",
    "nameFa": "ادویه",
    "aliasesFa": [
      "ادویه پلویی",
      "ادویه کباب",
      "ادویه مرغ"
    ],
    "category": "ادویه"
  },
  {
    "id": "ING-189",
    "nameFa": "کاری",
    "aliasesFa": [
      "کاری"
    ],
    "category": "ادویه"
  },
  {
    "id": "ING-190",
    "nameFa": "هل",
    "aliasesFa": [
      "هل"
    ],
    "category": "ادویه"
  },
  {
    "id": "ING-191",
    "nameFa": "زنجبیل",
    "aliasesFa": [
      "زنجبیل"
    ],
    "category": "ادویه"
  },
  {
    "id": "ING-192",
    "nameFa": "خردل",
    "aliasesFa": [
      "خردل"
    ],
    "category": "چاشنی"
  },
  {
    "id": "ING-193",
    "nameFa": "دود",
    "aliasesFa": [
      "دود"
    ],
    "category": "چاشنی"
  },
  {
    "id": "ING-194",
    "nameFa": "سس مایونز",
    "aliasesFa": [
      "مایونز"
    ],
    "category": "سس"
  },
  {
    "id": "ING-195",
    "nameFa": "سس کچاپ",
    "aliasesFa": [
      "کچاپ"
    ],
    "category": "سس"
  },
  {
    "id": "ING-196",
    "nameFa": "سس خردل",
    "aliasesFa": [
      "سس خردل"
    ],
    "category": "سس"
  },
  {
    "id": "ING-197",
    "nameFa": "سس هزار جزیره",
    "aliasesFa": [
      "سس هزار جزیره"
    ],
    "category": "سس"
  },
  {
    "id": "ING-198",
    "nameFa": "سس سزار",
    "aliasesFa": [
      "سس سزار"
    ],
    "category": "سس"
  },
  {
    "id": "ING-199",
    "nameFa": "سس رنچ",
    "aliasesFa": [
      "سس رنچ"
    ],
    "category": "سس"
  },
  {
    "id": "ING-200",
    "nameFa": "سس تارتار",
    "aliasesFa": [
      "سس تارتار"
    ],
    "category": "سس"
  },
  {
    "id": "ING-201",
    "nameFa": "سس باربیکیو",
    "aliasesFa": [
      "سس باربیکیو"
    ],
    "category": "سس"
  },
  {
    "id": "ING-202",
    "nameFa": "سس سویا",
    "aliasesFa": [
      "سس سویا"
    ],
    "category": "سس"
  },
  {
    "id": "ING-203",
    "nameFa": "سس گوجه",
    "aliasesFa": [
      "سس گوجه"
    ],
    "category": "سس"
  },
  {
    "id": "ING-204",
    "nameFa": "سس آلفردو",
    "aliasesFa": [
      "سس آلفردو"
    ],
    "category": "سس"
  },
  {
    "id": "ING-205",
    "nameFa": "سس بشامل",
    "aliasesFa": [
      "سس بشامل"
    ],
    "category": "سس"
  },
  {
    "id": "ING-206",
    "nameFa": "سس پستو",
    "aliasesFa": [
      "سس پستو"
    ],
    "category": "سس"
  },
  {
    "id": "ING-207",
    "nameFa": "سس هولندیز",
    "aliasesFa": [
      "سس هولندیز"
    ],
    "category": "سس"
  },
  {
    "id": "ING-208",
    "nameFa": "سس انار",
    "aliasesFa": [
      "سس انار"
    ],
    "category": "سس"
  },
  {
    "id": "ING-209",
    "nameFa": "رب گوجه",
    "aliasesFa": [
      "رب گوجه"
    ],
    "category": "سس"
  },
  {
    "id": "ING-210",
    "nameFa": "رب انار",
    "aliasesFa": [
      "رب انار"
    ],
    "category": "سس"
  },
  {
    "id": "ING-211",
    "nameFa": "خمیر",
    "aliasesFa": [
      "خمیر پیتزا",
      "خمیر یوفکا",
      "خمیر هزارلا"
    ],
    "category": "خمیر"
  },
  {
    "id": "ING-212",
    "nameFa": "پودر سوخاری",
    "aliasesFa": [
      "پودر سوخاری"
    ],
    "category": "پودر"
  },
  {
    "id": "ING-213",
    "nameFa": "کاکائو",
    "aliasesFa": [
      "پودر کاکائو"
    ],
    "category": "پودر"
  },
  {
    "id": "ING-214",
    "nameFa": "ژلاتین",
    "aliasesFa": [
      "پودر ژلاتین"
    ],
    "category": "پودر"
  },
  {
    "id": "ING-215",
    "nameFa": "خمیرمایه",
    "aliasesFa": [
      "پودر خمیرمایه"
    ],
    "category": "پودر"
  },
  {
    "id": "ING-216",
    "nameFa": "بیکینگ پودر",
    "aliasesFa": [
      "پودر بیکینگ"
    ],
    "category": "پودر"
  },
  {
    "id": "ING-217",
    "nameFa": "وانیل",
    "aliasesFa": [
      "وانیل"
    ],
    "category": "پودر"
  },
  {
    "id": "ING-218",
    "nameFa": "نشاسته",
    "aliasesFa": [
      "نشاسته"
    ],
    "category": "پودر"
  },
  {
    "id": "ING-219",
    "nameFa": "کارامل",
    "aliasesFa": [
      "کارامل"
    ],
    "category": "پودر"
  },
  {
    "id": "ING-220",
    "nameFa": "فلافل",
    "aliasesFa": [
      "فلافل"
    ],
    "category": "غذاهای آماده"
  },
  {
    "id": "ING-221",
    "nameFa": "کوکو سبزی",
    "aliasesFa": [
      "کوکو سبزی"
    ],
    "category": "غذاهای آماده"
  },
  {
    "id": "ING-222",
    "nameFa": "حلیم",
    "aliasesFa": [
      "حلیم"
    ],
    "category": "غذاهای آماده"
  }
];

export const CANONICAL_FOODS: Food[] = [
  {
    "id": "IR-KHORESH-001",
    "name": "قورمه سبزی",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "لوبیا قرمز",
      "سبزی قورمه",
      "پیاز",
      "لیمو عمانی",
      "روغن"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-024",
      "ING-057",
      "ING-040",
      "ING-179",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-KHORESH-002",
    "name": "قیمه",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش لپه",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "لپه",
      "پیاز",
      "رب گوجه",
      "لیمو عمانی",
      "سیب زمینی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-027",
      "ING-040",
      "ING-209",
      "ING-179",
      "ING-039"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-KHORESH-003",
    "name": "قیمه بادمجان",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش لپه",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "لپه",
      "بادمجان",
      "پیاز",
      "رب گوجه",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-027",
      "ING-045",
      "ING-040",
      "ING-209",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-004",
    "name": "خورش فسنجان",
    "aliases": [
      "فسنجان"
    ],
    "category": "خورش‌ها",
    "subcategory": "خورش گردو",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 245,
      "protein": 7,
      "carbs": 14,
      "fat": 18,
      "fiber": 2.5
    },
    "ingredients": [
      "مرغ",
      "گردو",
      "رب انار",
      "پیاز",
      "شکر",
      "روغن"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-120",
      "ING-210",
      "ING-040",
      "ING-176",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "شمالی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-005",
    "name": "خورش کرفس",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "کرفس",
      "جعفری",
      "نعنا",
      "پیاز",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-064",
      "ING-052",
      "ING-051",
      "ING-040",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-006",
    "name": "خورش بادمجان",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "بادمجان",
      "پیاز",
      "رب گوجه",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-045",
      "ING-040",
      "ING-209",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-007",
    "name": "خورش لوبیا",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش حبوبات",
    "foodType": "main_dish",
    "visualAsset": "🫘",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "لوبیا چیتی",
      "پیاز",
      "رب گوجه",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-024",
      "ING-040",
      "ING-209",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-008",
    "name": "خورش کدو",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "کدو",
      "پیاز",
      "رب گوجه",
      "آلو"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-046",
      "ING-040",
      "ING-209",
      "ING-089"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-009",
    "name": "خورش آلو اسفناج",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "اسفناج",
      "آلو",
      "پیاز",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-050",
      "ING-089",
      "ING-040",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-010",
    "name": "خورش هویج",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "هویج",
      "پیاز",
      "رب گوجه",
      "آلو"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-042",
      "ING-040",
      "ING-209",
      "ING-089"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-011",
    "name": "خورش به",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش میوه",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "به",
      "پیاز",
      "رب گوجه",
      "آلو"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-091",
      "ING-040",
      "ING-209",
      "ING-089"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-012",
    "name": "خورش ریواس",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "ریواس",
      "پیاز",
      "نعنا",
      "آلو"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-069",
      "ING-040",
      "ING-051",
      "ING-089"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-013",
    "name": "خورش کنگر",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "کنگر",
      "پیاز",
      "لیمو عمانی",
      "نعنا"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-070",
      "ING-040",
      "ING-179",
      "ING-051"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-014",
    "name": "خورش غوره",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "غوره",
      "پیاز",
      "نعنا",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-071",
      "ING-040",
      "ING-051",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-015",
    "name": "خورش سیب",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش میوه",
    "foodType": "main_dish",
    "visualAsset": "🍎",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "سیب",
      "پیاز",
      "رب گوجه",
      "آلو"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-074",
      "ING-040",
      "ING-209",
      "ING-089"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-016",
    "name": "خورش انار",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش میوه",
    "foodType": "main_dish",
    "visualAsset": "🍎",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "مرغ",
      "رب انار",
      "گردو",
      "پیاز",
      "شکر"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-210",
      "ING-120",
      "ING-040",
      "ING-176"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-017",
    "name": "خورش نعنا",
    "aliases": [
      "نعنا داغ"
    ],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "نعنا",
      "جعفری",
      "پیاز",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-051",
      "ING-052",
      "ING-040",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-018",
    "name": "خورش بامیه",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "بامیه",
      "پیاز",
      "رب گوجه",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-066",
      "ING-040",
      "ING-209",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-019",
    "name": "خورش تره",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "تره",
      "پیاز",
      "لیمو عمانی",
      "نعنا"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-055",
      "ING-040",
      "ING-179",
      "ING-051"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-020",
    "name": "خورش کلم",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "کلم",
      "پیاز",
      "رب گوجه",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-048",
      "ING-040",
      "ING-209",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-021",
    "name": "خورش شوید",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "شوید",
      "پیاز",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-053",
      "ING-040",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-022",
    "name": "خورش چغندر",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "چغندر",
      "پیاز",
      "رب گوجه",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-061",
      "ING-040",
      "ING-209",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-023",
    "name": "خورش آلو",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش میوه",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "آلو",
      "پیاز",
      "رب گوجه",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-089",
      "ING-040",
      "ING-209",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-024",
    "name": "خورش قارچ",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "قارچ",
      "پیاز",
      "رب گوجه",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-059",
      "ING-040",
      "ING-209",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-025",
    "name": "خورش لپه",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش حبوبات",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "لپه",
      "پیاز",
      "رب گوجه",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-027",
      "ING-040",
      "ING-209",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-026",
    "name": "خورش نخود",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش حبوبات",
    "foodType": "main_dish",
    "visualAsset": "🫘",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "نخود",
      "پیاز",
      "رب گوجه",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-025",
      "ING-040",
      "ING-209",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-027",
    "name": "خورش باقلا",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش حبوبات",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "باقلا",
      "پیاز",
      "رب گوجه",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-029",
      "ING-040",
      "ING-209",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-028",
    "name": "خورش آلوچه",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش سبزی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "آلوچه",
      "پیاز",
      "نعنا",
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-089",
      "ING-040",
      "ING-051",
      "ING-179"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-029",
    "name": "خورش هلو",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش میوه",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "هلو",
      "پیاز",
      "رب گوجه",
      "آلو"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-087",
      "ING-040",
      "ING-209",
      "ING-089"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-KHORESH-030",
    "name": "خورش زردآلو",
    "aliases": [],
    "category": "خورش‌ها",
    "subcategory": "خورش میوه",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "زردآلو",
      "پیاز",
      "رب گوجه",
      "آلو"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-088",
      "ING-040",
      "ING-209",
      "ING-089"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-001",
    "name": "چلو",
    "aliases": [
      "برنج سفید"
    ],
    "category": "پلو و برنج",
    "subcategory": "چلو",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "روغن",
      "نمک"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-174",
      "ING-175"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-002",
    "name": "چلو مرغ",
    "aliases": [
      "چلو مرغ"
    ],
    "category": "پلو و برنج",
    "subcategory": "چلو",
    "foodType": "main_dish",
    "visualAsset": "🍗",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 185,
      "protein": 8,
      "carbs": 26,
      "fat": 6,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "مرغ",
      "کره",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-016",
      "ING-113",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-RICE-003",
    "name": "زرشک پلو با مرغ",
    "aliases": [
      "زرشک پلو"
    ],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 185,
      "protein": 8,
      "carbs": 26,
      "fat": 6,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "مرغ",
      "زرشک",
      "زعفران",
      "کره"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-016",
      "ING-107",
      "ING-180",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-RICE-004",
    "name": "باقالی پلو با مرغ",
    "aliases": [
      "باقالی پلو"
    ],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 185,
      "protein": 8,
      "carbs": 26,
      "fat": 6,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "باقلا",
      "مرغ",
      "شوید",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-029",
      "ING-016",
      "ING-053",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-005",
    "name": "لوبیا پلو",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "لوبیا سبز",
      "گوشت گوسفندی",
      "رب گوجه",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-024",
      "ING-001",
      "ING-209",
      "ING-040"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-006",
    "name": "عدس پلو",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "عدس",
      "گوشت گوسفندی",
      "کشمش",
      "خرما"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-026",
      "ING-001",
      "ING-109",
      "ING-106"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-007",
    "name": "هویج پلو",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "هویج",
      "گوشت گوسفندی",
      "کشمش",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-042",
      "ING-001",
      "ING-109",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-008",
    "name": "شیرین پلو",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "پوست پرتقال",
      "بادام",
      "پسته",
      "کشمش"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-072",
      "ING-121",
      "ING-124",
      "ING-109"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-009",
    "name": "ته چین مرغ",
    "aliases": [
      "ته چین"
    ],
    "category": "پلو و برنج",
    "subcategory": "ته چین",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 185,
      "protein": 8,
      "carbs": 26,
      "fat": 6,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "مرغ",
      "ماست",
      "زرده تخم مرغ",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-016",
      "ING-111",
      "ING-023",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-010",
    "name": "ته چین گوشت",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "ته چین",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 185,
      "protein": 8,
      "carbs": 26,
      "fat": 6,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "گوشت گوسفندی",
      "ماست",
      "زرده تخم مرغ",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-001",
      "ING-111",
      "ING-023",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-011",
    "name": "کلم پلو",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "کلم",
      "گوشت گوسفندی",
      "پیاز",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-048",
      "ING-001",
      "ING-040",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-012",
    "name": "سبزی پلو با ماهی",
    "aliases": [
      "سبزی پلو"
    ],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "سبزی",
      "ماهی",
      "زعفران",
      "کره"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-058",
      "ING-018",
      "ING-180",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-013",
    "name": "قیسی پلو",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "قیسی",
      "گوشت گوسفندی",
      "کشمش",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-088",
      "ING-001",
      "ING-109",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-014",
    "name": "آلبالو پلو",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "آلبالو",
      "مرغ",
      "زعفران",
      "کره"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-086",
      "ING-016",
      "ING-180",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-015",
    "name": "گیلاس پلو",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "گیلاس",
      "مرغ",
      "زعفران",
      "کره"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-085",
      "ING-016",
      "ING-180",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-016",
    "name": "نارنج پلو",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "نارنج",
      "مرغ",
      "زعفران",
      "بادام"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-072",
      "ING-016",
      "ING-180",
      "ING-121"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-017",
    "name": "کدو پلو",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "کدو",
      "گوشت گوسفندی",
      "کشمش",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-046",
      "ING-001",
      "ING-109",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-018",
    "name": "ماش پلو",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "ماش",
      "گوشت گوسفندی",
      "کشمش",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-028",
      "ING-001",
      "ING-109",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-019",
    "name": "نخود پلو",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "نخود",
      "گوشت گوسفندی",
      "کشمش",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-025",
      "ING-001",
      "ING-109",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-020",
    "name": "شوید پلو",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "پلو مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "شوید",
      "ماست",
      "زعفران",
      "کره"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-053",
      "ING-111",
      "ING-180",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-021",
    "name": "دمی",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "دمی",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "روغن",
      "نمک"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-174",
      "ING-175"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-022",
    "name": "کته",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "کته",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "روغن",
      "نمک"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-174",
      "ING-175"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-RICE-023",
    "name": "چلوکباب کوبیده",
    "aliases": [],
    "category": "پلو و برنج",
    "subcategory": "چلو",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 185,
      "protein": 8,
      "carbs": 26,
      "fat": 6,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "گوشت چرخ کرده",
      "پیاز",
      "زعفران",
      "کره"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-003",
      "ING-040",
      "ING-180",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "برنجی",
      "ناهار",
      "شام",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-KABAB-001",
    "name": "کباب کوبیده",
    "aliases": [
      "کوبیده"
    ],
    "category": "کباب",
    "subcategory": "کباب کوبیده",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت چرخ کرده",
      "پیاز",
      "نمک",
      "فلفل"
    ],
    "ingredientIds": [
      "ING-003",
      "ING-040",
      "ING-175",
      "ING-183"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-002",
    "name": "کباب برگ",
    "aliases": [
      "برگ"
    ],
    "category": "کباب",
    "subcategory": "کباب برگ",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت گوسفندی",
      "پیاز",
      "نمک",
      "فلفل"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-040",
      "ING-175",
      "ING-183"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-003",
    "name": "کباب سلطانی",
    "aliases": [
      "سلطانی"
    ],
    "category": "کباب",
    "subcategory": "کباب مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت گوسفندی",
      "گوشت چرخ کرده",
      "پیاز",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-003",
      "ING-040",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-004",
    "name": "جوجه کباب",
    "aliases": [
      "جوجه",
      "جوجه کباب مرغ"
    ],
    "category": "کباب",
    "subcategory": "کباب مرغ",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 175,
      "protein": 24,
      "carbs": 1,
      "fat": 8,
      "fiber": 0
    },
    "ingredients": [
      "مرغ",
      "پیاز",
      "زعفران",
      "لیمو",
      "روغن"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-040",
      "ING-180",
      "ING-078",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-005",
    "name": "کباب بختیاری",
    "aliases": [
      "بختیاری"
    ],
    "category": "کباب",
    "subcategory": "کباب مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت گوسفندی",
      "مرغ",
      "پیاز",
      "زعفران",
      "فلفل دلمه"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-016",
      "ING-040",
      "ING-180",
      "ING-047"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-006",
    "name": "کباب لقمه",
    "aliases": [],
    "category": "کباب",
    "subcategory": "کباب کوبیده",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت چرخ کرده",
      "پیاز",
      "نمک",
      "فلفل"
    ],
    "ingredientIds": [
      "ING-003",
      "ING-040",
      "ING-175",
      "ING-183"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-007",
    "name": "کباب ترش",
    "aliases": [],
    "category": "کباب",
    "subcategory": "کباب محلی",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت گوسفندی",
      "رب انار",
      "گردو",
      "پیاز",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-210",
      "ING-120",
      "ING-040",
      "ING-078"
    ],
    "tags": [
      "ایرانی",
      "شمالی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-008",
    "name": "کباب چنجه",
    "aliases": [],
    "category": "کباب",
    "subcategory": "کباب برگ",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت گوسفندی",
      "پیاز",
      "نمک",
      "فلفل"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-040",
      "ING-175",
      "ING-183"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-009",
    "name": "شیشلیک",
    "aliases": [],
    "category": "کباب",
    "subcategory": "کباب دنده",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت گوسفندی",
      "پیاز",
      "نمک",
      "فلفل"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-040",
      "ING-175",
      "ING-183"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-010",
    "name": "کباب دنده",
    "aliases": [],
    "category": "کباب",
    "subcategory": "کباب دنده",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت گوسفندی",
      "پیاز",
      "نمک",
      "فلفل"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-040",
      "ING-175",
      "ING-183"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-011",
    "name": "کباب ماهی",
    "aliases": [],
    "category": "کباب",
    "subcategory": "کباب ماهی",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "ماهی",
      "پیاز",
      "زعفران",
      "لیمو",
      "روغن"
    ],
    "ingredientIds": [
      "ING-018",
      "ING-040",
      "ING-180",
      "ING-078",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-012",
    "name": "کباب مرغ",
    "aliases": [],
    "category": "کباب",
    "subcategory": "کباب مرغ",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 175,
      "protein": 24,
      "carbs": 1,
      "fat": 8,
      "fiber": 0
    },
    "ingredients": [
      "مرغ",
      "پیاز",
      "زعفران",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-040",
      "ING-180",
      "ING-078"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-013",
    "name": "کباب دل و جگر",
    "aliases": [
      "دل و جگر"
    ],
    "category": "کباب",
    "subcategory": "کباب احشاء",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "دل",
      "جگر",
      "قلوه",
      "پیاز",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-004",
      "ING-040",
      "ING-078"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-014",
    "name": "کباب مخلوط",
    "aliases": [],
    "category": "کباب",
    "subcategory": "کباب مخلوط",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت گوسفندی",
      "مرغ",
      "پیاز",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-016",
      "ING-040",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-KABAB-015",
    "name": "کباب زعفرانی",
    "aliases": [],
    "category": "کباب",
    "subcategory": "کباب مرغ",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "مرغ",
      "زعفران",
      "پیاز",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-180",
      "ING-040",
      "ING-078"
    ],
    "tags": [
      "ایرانی",
      "پروتئینی",
      "ناهار",
      "شام",
      "رستورانی"
    ]
  },
  {
    "id": "IR-ASH-001",
    "name": "آش رشته",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "رشته آشی",
      "لوبیا",
      "نخود",
      "عدس",
      "سبزی",
      "کشک",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-034",
      "ING-024",
      "ING-025",
      "ING-026",
      "ING-058",
      "ING-116",
      "ING-040"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-002",
    "name": "آش دوغ",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "دوغ",
      "نخود",
      "برنج",
      "سبزی",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-115",
      "ING-025",
      "ING-031",
      "ING-058",
      "ING-040"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-003",
    "name": "آش شله قلمکار",
    "aliases": [
      "شله قلمکار"
    ],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "لوبیا",
      "نخود",
      "عدس",
      "سبزی",
      "برنج",
      "گوشت گوسفندی",
      "کشک",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-024",
      "ING-025",
      "ING-026",
      "ING-058",
      "ING-031",
      "ING-001",
      "ING-116",
      "ING-040"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-004",
    "name": "آش کشک",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "کشک",
      "نخود",
      "لوبیا",
      "سبزی",
      "پیاز",
      "نعنا"
    ],
    "ingredientIds": [
      "ING-116",
      "ING-025",
      "ING-024",
      "ING-058",
      "ING-040",
      "ING-051"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-005",
    "name": "آش جو",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "جو",
      "سبزی",
      "کشک",
      "پیاز",
      "نعنا"
    ],
    "ingredientIds": [
      "ING-033",
      "ING-058",
      "ING-116",
      "ING-040",
      "ING-051"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-006",
    "name": "آش ماش",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "ماش",
      "برنج",
      "سبزی",
      "کشک",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-028",
      "ING-031",
      "ING-058",
      "ING-116",
      "ING-040"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-007",
    "name": "آش عدس",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "عدس",
      "برنج",
      "سبزی",
      "پیاز",
      "نعنا"
    ],
    "ingredientIds": [
      "ING-026",
      "ING-031",
      "ING-058",
      "ING-040",
      "ING-051"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-009",
    "name": "آش گندم",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "گندم",
      "نخود",
      "لوبیا",
      "سبزی",
      "کشک"
    ],
    "ingredientIds": [
      "ING-032",
      "ING-025",
      "ING-024",
      "ING-058",
      "ING-116"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-010",
    "name": "آش کلم",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "کلم",
      "لوبیا",
      "نخود",
      "سبزی",
      "کشک",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-048",
      "ING-024",
      "ING-025",
      "ING-058",
      "ING-116",
      "ING-040"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-011",
    "name": "آش ترخینه",
    "aliases": [
      "ترخینه"
    ],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "ترخینه",
      "لوبیا",
      "نخود",
      "سبزی",
      "پیاز",
      "کشک"
    ],
    "ingredientIds": [
      "ING-073",
      "ING-024",
      "ING-025",
      "ING-058",
      "ING-040",
      "ING-116"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "غربی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-012",
    "name": "آش خیار",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "خیار",
      "ماست",
      "برنج",
      "نعنا",
      "کشک"
    ],
    "ingredientIds": [
      "ING-044",
      "ING-111",
      "ING-031",
      "ING-051",
      "ING-116"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-013",
    "name": "آش سماق",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "سماق",
      "لوبیا",
      "نخود",
      "سبزی",
      "پیاز",
      "کشک"
    ],
    "ingredientIds": [
      "ING-184",
      "ING-024",
      "ING-025",
      "ING-058",
      "ING-040",
      "ING-116"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-014",
    "name": "آش آلو",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "آلو",
      "لوبیا",
      "نخود",
      "سبزی",
      "پیاز",
      "کشک"
    ],
    "ingredientIds": [
      "ING-089",
      "ING-024",
      "ING-025",
      "ING-058",
      "ING-040",
      "ING-116"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-015",
    "name": "آش میوه",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "میوه خشک",
      "لوبیا",
      "نخود",
      "سبزی",
      "پیاز",
      "کشک"
    ],
    "ingredientIds": [
      "ING-146",
      "ING-024",
      "ING-025",
      "ING-058",
      "ING-040",
      "ING-116"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-ASH-016",
    "name": "آش انار",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "آش",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "انار",
      "لوبیا",
      "نخود",
      "سبزی",
      "پیاز",
      "کشک"
    ],
    "ingredientIds": [
      "ING-092",
      "ING-024",
      "ING-025",
      "ING-058",
      "ING-040",
      "ING-116"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-SOUP-001",
    "name": "سوپ جو",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "سوپ",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 75,
      "protein": 3.5,
      "carbs": 10,
      "fat": 2,
      "fiber": 2.8
    },
    "ingredients": [
      "جو",
      "هویج",
      "کرفس",
      "پیاز",
      "خامه",
      "آب مرغ"
    ],
    "ingredientIds": [
      "ING-033",
      "ING-042",
      "ING-064",
      "ING-040",
      "ING-114",
      "ING-119"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-SOUP-002",
    "name": "سوپ مرغ",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "سوپ",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 75,
      "protein": 3.5,
      "carbs": 10,
      "fat": 2,
      "fiber": 2.8
    },
    "ingredients": [
      "مرغ",
      "هویج",
      "کرفس",
      "پیاز",
      "رشته"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-042",
      "ING-064",
      "ING-040",
      "ING-034"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-SOUP-003",
    "name": "سوپ سبزیجات",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "سوپ",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 75,
      "protein": 3.5,
      "carbs": 10,
      "fat": 2,
      "fiber": 2.8
    },
    "ingredients": [
      "سبزیجات",
      "پیاز",
      "سیب زمینی",
      "خامه"
    ],
    "ingredientIds": [
      "ING-047",
      "ING-040",
      "ING-039",
      "ING-114"
    ],
    "tags": [
      "ایرانی",
      "گیاهی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-SOUP-004",
    "name": "سوپ عدس",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "سوپ",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 75,
      "protein": 3.5,
      "carbs": 10,
      "fat": 2,
      "fiber": 2.8
    },
    "ingredients": [
      "عدس",
      "پیاز",
      "هویج",
      "کرفس",
      "آب مرغ"
    ],
    "ingredientIds": [
      "ING-026",
      "ING-040",
      "ING-042",
      "ING-064",
      "ING-119"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-SOUP-005",
    "name": "سوپ قارچ",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "سوپ",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 75,
      "protein": 3.5,
      "carbs": 10,
      "fat": 2,
      "fiber": 2.8
    },
    "ingredients": [
      "قارچ",
      "پیاز",
      "خامه",
      "آب مرغ"
    ],
    "ingredientIds": [
      "ING-059",
      "ING-040",
      "ING-114",
      "ING-119"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-SOUP-006",
    "name": "سوپ گوجه",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "سوپ",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 75,
      "protein": 3.5,
      "carbs": 10,
      "fat": 2,
      "fiber": 2.8
    },
    "ingredients": [
      "گوجه",
      "پیاز",
      "خامه",
      "آب مرغ",
      "ریحان"
    ],
    "ingredientIds": [
      "ING-043",
      "ING-040",
      "ING-114",
      "ING-119",
      "ING-056"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-SOUP-007",
    "name": "سوپ کلم",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "سوپ",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 75,
      "protein": 3.5,
      "carbs": 10,
      "fat": 2,
      "fiber": 2.8
    },
    "ingredients": [
      "کلم",
      "هویج",
      "پیاز",
      "گوجه",
      "آب مرغ"
    ],
    "ingredientIds": [
      "ING-048",
      "ING-042",
      "ING-040",
      "ING-043",
      "ING-119"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-SOUP-008",
    "name": "سوپ ذرت",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "سوپ",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 75,
      "protein": 3.5,
      "carbs": 10,
      "fat": 2,
      "fiber": 2.8
    },
    "ingredients": [
      "ذرت",
      "پیاز",
      "خامه",
      "آب مرغ"
    ],
    "ingredientIds": [
      "ING-060",
      "ING-040",
      "ING-114",
      "ING-119"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-SOUP-009",
    "name": "سوپ نخود",
    "aliases": [],
    "category": "آش و سوپ",
    "subcategory": "سوپ",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 75,
      "protein": 3.5,
      "carbs": 10,
      "fat": 2,
      "fiber": 2.8
    },
    "ingredients": [
      "نخود",
      "پیاز",
      "هویج",
      "آب مرغ"
    ],
    "ingredientIds": [
      "ING-025",
      "ING-040",
      "ING-042",
      "ING-119"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-NANI-001",
    "name": "نان و پنیر",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "پنیر"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-112"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "لبنی",
      "میان وعده"
    ]
  },
  {
    "id": "IR-NANI-002",
    "name": "نان و پنیر و گردو",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "پنیر",
      "گردو"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-112",
      "ING-120"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "لبنی",
      "مغزی"
    ]
  },
  {
    "id": "IR-NANI-003",
    "name": "نان و پنیر و سبزی",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "پنیر",
      "سبزی خوردن",
      "گردو"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-112",
      "ING-058",
      "ING-120"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "لبنی"
    ]
  },
  {
    "id": "IR-NANI-004",
    "name": "نان و کره",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "کره"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "لبنی"
    ]
  },
  {
    "id": "IR-NANI-005",
    "name": "نان و عسل",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "عسل",
      "کره"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-177",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "شیرین"
    ]
  },
  {
    "id": "IR-NANI-006",
    "name": "نان و مربا",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "مربا",
      "کره"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-172",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "شیرین"
    ]
  },
  {
    "id": "IR-NANI-007",
    "name": "نان و پنیر و خیار",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "پنیر",
      "خیار"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-112",
      "ING-044"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "لبنی"
    ]
  },
  {
    "id": "IR-NANI-008",
    "name": "نان و پنیر و گوجه",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "پنیر",
      "گوجه"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-112",
      "ING-043"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "لبنی"
    ]
  },
  {
    "id": "IR-NANI-009",
    "name": "نان و پنیر و هندوانه",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "پنیر",
      "هندوانه"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-112",
      "ING-081"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "لبنی"
    ]
  },
  {
    "id": "IR-NANI-010",
    "name": "نان و پنیر و انگور",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "پنیر",
      "انگور"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-112",
      "ING-080"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "لبنی"
    ]
  },
  {
    "id": "IR-NANI-011",
    "name": "نان و تخم مرغ",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه گرم",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "تخم مرغ",
      "کره"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-023",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-NANI-012",
    "name": "نان و املت",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه گرم",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "تخم مرغ",
      "گوجه",
      "کره"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-023",
      "ING-043",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-NANI-013",
    "name": "نان و کوکو",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه گرم",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "کوکو سبزی",
      "ماست"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-221",
      "ING-111"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-NANI-014",
    "name": "نان و حلیم",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه گرم",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "حلیم",
      "دارچین",
      "شکر"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-222",
      "ING-182",
      "ING-176"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی"
    ]
  },
  {
    "id": "IR-NANI-015",
    "name": "نان و ماست",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "میان وعده",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "ماست",
      "سبزی"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-111",
      "ING-058"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "لبنی"
    ]
  },
  {
    "id": "IR-NANI-016",
    "name": "نان و ماست و پنیر",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "میان وعده",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "ماست",
      "پنیر"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-111",
      "ING-112"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "لبنی"
    ]
  },
  {
    "id": "IR-NANI-017",
    "name": "نان و خرما",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "خرما",
      "کره"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-106",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "شیرین"
    ]
  },
  {
    "id": "IR-NANI-018",
    "name": "نان و پنیر و خرما",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "پنیر",
      "خرما"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-112",
      "ING-106"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "لبنی"
    ]
  },
  {
    "id": "IR-NANI-019",
    "name": "نان و حلوا",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "میان وعده",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "حلوا",
      "کره"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "شیرین"
    ]
  },
  {
    "id": "IR-NANI-020",
    "name": "نان و سیب زمینی",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "میان وعده",
    "foodType": "composite",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "نان",
      "سیب زمینی",
      "کره"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-039",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "نانی"
    ]
  },
  {
    "id": "IR-NANI-021",
    "name": "ارده و شیره",
    "aliases": [
      "ارده شیره"
    ],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🥪",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ارده",
      "شیره انگور",
      "نان"
    ],
    "ingredientIds": [
      "ING-127",
      "ING-171",
      "ING-038"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "شیرین"
    ]
  },
  {
    "id": "IR-NANI-022",
    "name": "کره و عسل",
    "aliases": [],
    "category": "غذاهای نانی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🥪",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "کره",
      "عسل",
      "نان"
    ],
    "ingredientIds": [
      "ING-113",
      "ING-177",
      "ING-038"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نانی",
      "شیرین"
    ]
  },
  {
    "id": "IR-COMP-001",
    "name": "ماست و خیار",
    "aliases": [],
    "category": "غذاهای ترکیبی",
    "subcategory": "ماست",
    "foodType": "composite",
    "visualAsset": "🥛",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماست",
      "خیار",
      "نعنا",
      "گردو"
    ],
    "ingredientIds": [
      "ING-111",
      "ING-044",
      "ING-051",
      "ING-120"
    ],
    "tags": [
      "ایرانی",
      "لبنی",
      "میان وعده",
      "گیاهی"
    ]
  },
  {
    "id": "IR-COMP-002",
    "name": "ماست و موسیر",
    "aliases": [],
    "category": "غذاهای ترکیبی",
    "subcategory": "ماست",
    "foodType": "composite",
    "visualAsset": "🥛",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماست",
      "موسیر"
    ],
    "ingredientIds": [
      "ING-111",
      "ING-041"
    ],
    "tags": [
      "ایرانی",
      "لبنی",
      "میان وعده"
    ]
  },
  {
    "id": "IR-COMP-003",
    "name": "پنیر و خرما",
    "aliases": [],
    "category": "غذاهای ترکیبی",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🧀",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "پنیر",
      "خرما"
    ],
    "ingredientIds": [
      "ING-112",
      "ING-106"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "لبنی",
      "شیرین"
    ]
  },
  {
    "id": "IR-BREAKFAST-001",
    "name": "املت",
    "aliases": [
      "املت گوجه"
    ],
    "category": "صبحانه",
    "subcategory": "تخم مرغ",
    "foodType": "main_dish",
    "visualAsset": "🍳",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "تخم مرغ",
      "گوجه",
      "روغن",
      "نمک"
    ],
    "ingredientIds": [
      "ING-023",
      "ING-043",
      "ING-174",
      "ING-175"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-BREAKFAST-002",
    "name": "کوکو سبزی",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "کوکو",
    "foodType": "main_dish",
    "visualAsset": "🍳",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "تخم مرغ",
      "سبزی",
      "آرد",
      "پیاز",
      "روغن"
    ],
    "ingredientIds": [
      "ING-023",
      "ING-058",
      "ING-037",
      "ING-040",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-BREAKFAST-003",
    "name": "کوکو سیب زمینی",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "کوکو",
    "foodType": "main_dish",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "تخم مرغ",
      "سیب زمینی",
      "پیاز",
      "زردچوبه",
      "روغن"
    ],
    "ingredientIds": [
      "ING-023",
      "ING-039",
      "ING-040",
      "ING-181",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-BREAKFAST-004",
    "name": "کوکو مرغ",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "کوکو",
    "foodType": "main_dish",
    "visualAsset": "🍗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "تخم مرغ",
      "مرغ",
      "پیاز",
      "آرد",
      "روغن"
    ],
    "ingredientIds": [
      "ING-023",
      "ING-016",
      "ING-040",
      "ING-037",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-BREAKFAST-005",
    "name": "کوکو گوشت",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "کوکو",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "تخم مرغ",
      "گوشت چرخ کرده",
      "پیاز",
      "آرد",
      "روغن"
    ],
    "ingredientIds": [
      "ING-023",
      "ING-003",
      "ING-040",
      "ING-037",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-BREAKFAST-006",
    "name": "نیمرو",
    "aliases": [
      "تخم مرغ نیمرو"
    ],
    "category": "صبحانه",
    "subcategory": "تخم مرغ",
    "foodType": "main_dish",
    "visualAsset": "🍳",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "تخم مرغ",
      "روغن",
      "نمک"
    ],
    "ingredientIds": [
      "ING-023",
      "ING-174",
      "ING-175"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-BREAKFAST-007",
    "name": "تخم مرغ آب پز",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "تخم مرغ",
    "foodType": "main_dish",
    "visualAsset": "🍳",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 55
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 55
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 13,
      "carbs": 1.1,
      "fat": 11,
      "fiber": 0
    },
    "ingredients": [
      "تخم مرغ",
      "نمک"
    ],
    "ingredientIds": [
      "ING-023",
      "ING-175"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-BREAKFAST-008",
    "name": "عسلی",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍳",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "عسل",
      "کره",
      "نان"
    ],
    "ingredientIds": [
      "ING-177",
      "ING-113",
      "ING-038"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "شیرین"
    ]
  },
  {
    "id": "IR-BREAKFAST-009",
    "name": "پنیر و گردو",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🧀",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "پنیر",
      "گردو"
    ],
    "ingredientIds": [
      "ING-112",
      "ING-120"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "لبنی",
      "مغزی"
    ]
  },
  {
    "id": "IR-BREAKFAST-010",
    "name": "خامه و عسل",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "صبحانه سرد",
    "foodType": "composite",
    "visualAsset": "🍳",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "خامه",
      "عسل",
      "نان"
    ],
    "ingredientIds": [
      "ING-114",
      "ING-177",
      "ING-038"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "شیرین"
    ]
  },
  {
    "id": "IR-BREAKFAST-011",
    "name": "شیر و عسل",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "نوشیدنی صبحانه",
    "foodType": "composite",
    "visualAsset": "🍳",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "شیر",
      "عسل"
    ],
    "ingredientIds": [
      "ING-110",
      "ING-177"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نوشیدنی",
      "شیرین"
    ]
  },
  {
    "id": "IR-BREAKFAST-012",
    "name": "شیر و خرما",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "نوشیدنی صبحانه",
    "foodType": "composite",
    "visualAsset": "🍳",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "شیر",
      "خرما"
    ],
    "ingredientIds": [
      "ING-110",
      "ING-106"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "نوشیدنی",
      "شیرین"
    ]
  },
  {
    "id": "IR-BREAKFAST-013",
    "name": "عدسی",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "حبوبات",
    "foodType": "main_dish",
    "visualAsset": "🫘",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "عدس",
      "پیاز",
      "سیر",
      "رب گوجه",
      "روغن"
    ],
    "ingredientIds": [
      "ING-026",
      "ING-040",
      "ING-041",
      "ING-209",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "گیاهی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-BREAKFAST-014",
    "name": "لوبیا چیتی",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "حبوبات",
    "foodType": "main_dish",
    "visualAsset": "🫘",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "لوبیا چیتی",
      "پیاز",
      "سیر",
      "رب گوجه",
      "روغن"
    ],
    "ingredientIds": [
      "ING-024",
      "ING-040",
      "ING-041",
      "ING-209",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "گیاهی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-BREAKFAST-015",
    "name": "کله پاچه",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "سنتی",
    "foodType": "main_dish",
    "visualAsset": "🍳",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "پاچه",
      "زبان",
      "مغز",
      "چشم",
      "پیاز",
      "نعنا"
    ],
    "ingredientIds": [
      "ING-006",
      "ING-005",
      "ING-007",
      "ING-040",
      "ING-051"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "صبحانه",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-BREAKFAST-016",
    "name": "حلیم",
    "aliases": [
      "حلیم گندم",
      "حلیم گوشت"
    ],
    "category": "صبحانه",
    "subcategory": "حلیم",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "گندم",
      "گوشت گوسفندی",
      "دارچین",
      "شکر",
      "روغن"
    ],
    "ingredientIds": [
      "ING-032",
      "ING-001",
      "ING-182",
      "ING-176",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "سنتی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-BREAKFAST-018",
    "name": "سوسیس تخم مرغ",
    "aliases": [],
    "category": "صبحانه",
    "subcategory": "تخم مرغ",
    "foodType": "main_dish",
    "visualAsset": "🍳",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "سوسیس",
      "تخم مرغ",
      "گوجه",
      "روغن"
    ],
    "ingredientIds": [
      "ING-008",
      "ING-023",
      "ING-043",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "صبحانه",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-MEAL-001",
    "name": "آبگوشت",
    "aliases": [],
    "category": "غذاهای ایرانی",
    "subcategory": "آبگوشت",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت گوسفندی",
      "نخود",
      "لوبیا",
      "سیب زمینی",
      "پیاز",
      "رب گوجه"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-025",
      "ING-024",
      "ING-039",
      "ING-040",
      "ING-209"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-MEAL-002",
    "name": "آبگوشت بزباش",
    "aliases": [
      "بزباش"
    ],
    "category": "غذاهای ایرانی",
    "subcategory": "آبگوشت",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت گوسفندی",
      "نخود",
      "لوبیا",
      "سبزی",
      "پیاز",
      "رب گوجه"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-025",
      "ING-024",
      "ING-058",
      "ING-040",
      "ING-209"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-MEAL-003",
    "name": "دیزی",
    "aliases": [],
    "category": "غذاهای ایرانی",
    "subcategory": "آبگوشت",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت گوسفندی",
      "نخود",
      "لوبیا",
      "سیب زمینی",
      "پیاز",
      "رب گوجه"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-025",
      "ING-024",
      "ING-039",
      "ING-040",
      "ING-209"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-MEAL-004",
    "name": "دلمه برگ مو",
    "aliases": [
      "دلمه"
    ],
    "category": "غذاهای ایرانی",
    "subcategory": "دلمه",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "برگ مو",
      "گوشت چرخ کرده",
      "برنج",
      "لپه",
      "سبزی",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-058",
      "ING-003",
      "ING-031",
      "ING-027",
      "ING-040"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-005",
    "name": "دلمه کلم",
    "aliases": [],
    "category": "غذاهای ایرانی",
    "subcategory": "دلمه",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "کلم",
      "گوشت چرخ کرده",
      "برنج",
      "لپه",
      "سبزی",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-048",
      "ING-003",
      "ING-031",
      "ING-027",
      "ING-058",
      "ING-040"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-006",
    "name": "دلمه فلفل",
    "aliases": [],
    "category": "غذاهای ایرانی",
    "subcategory": "دلمه",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "فلفل دلمه",
      "گوشت چرخ کرده",
      "برنج",
      "لپه",
      "سبزی",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-047",
      "ING-003",
      "ING-031",
      "ING-027",
      "ING-058",
      "ING-040"
    ],
    "tags": [
      "ایرانی",
      "سنتی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-007",
    "name": "کوفته تبریزی",
    "aliases": [
      "کوفته"
    ],
    "category": "غذاهای ایرانی",
    "subcategory": "کوفته",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت چرخ کرده",
      "برنج",
      "لپه",
      "پیاز",
      "سبزی",
      "تخم مرغ"
    ],
    "ingredientIds": [
      "ING-003",
      "ING-031",
      "ING-027",
      "ING-040",
      "ING-058",
      "ING-023"
    ],
    "tags": [
      "ایرانی",
      "آذربایجانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-008",
    "name": "شامی",
    "aliases": [],
    "category": "غذاهای ایرانی",
    "subcategory": "شامی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت چرخ کرده",
      "نخود چرخ کرده",
      "پیاز",
      "تخم مرغ",
      "روغن"
    ],
    "ingredientIds": [
      "ING-003",
      "ING-025",
      "ING-040",
      "ING-023",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-MEAL-009",
    "name": "شامی کباب",
    "aliases": [],
    "category": "غذاهای ایرانی",
    "subcategory": "شامی",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت چرخ کرده",
      "نخود چرخ کرده",
      "پیاز",
      "تخم مرغ",
      "روغن"
    ],
    "ingredientIds": [
      "ING-003",
      "ING-025",
      "ING-040",
      "ING-023",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-MEAL-010",
    "name": "کتلت گوشت",
    "aliases": [
      "کتلت"
    ],
    "category": "غذاهای ایرانی",
    "subcategory": "کتلت",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت چرخ کرده",
      "سیب زمینی",
      "پیاز",
      "تخم مرغ",
      "آرد",
      "روغن"
    ],
    "ingredientIds": [
      "ING-003",
      "ING-039",
      "ING-040",
      "ING-023",
      "ING-037",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-MEAL-011",
    "name": "کتلت مرغ",
    "aliases": [],
    "category": "غذاهای ایرانی",
    "subcategory": "کتلت",
    "foodType": "main_dish",
    "visualAsset": "🍗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "مرغ چرخ کرده",
      "سیب زمینی",
      "پیاز",
      "تخم مرغ",
      "آرد",
      "روغن"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-039",
      "ING-040",
      "ING-023",
      "ING-037",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-MEAL-012",
    "name": "کتلت سیب زمینی",
    "aliases": [],
    "category": "غذاهای ایرانی",
    "subcategory": "کتلت",
    "foodType": "main_dish",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سیب زمینی",
      "گوشت چرخ کرده",
      "پیاز",
      "تخم مرغ",
      "آرد",
      "روغن"
    ],
    "ingredientIds": [
      "ING-039",
      "ING-003",
      "ING-040",
      "ING-023",
      "ING-037",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-013",
    "name": "میرزا قاسمی",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "گیلانی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "بادمجان",
      "سیر",
      "گوجه",
      "تخم مرغ",
      "روغن"
    ],
    "ingredientIds": [
      "ING-045",
      "ING-041",
      "ING-043",
      "ING-023",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "شمالی",
      "گیلانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-014",
    "name": "بادمجان شکم پر",
    "aliases": [],
    "category": "غذاهای ایرانی",
    "subcategory": "شکم پر",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "بادمجان",
      "گوشت چرخ کرده",
      "پیاز",
      "رب گوجه",
      "برنج"
    ],
    "ingredientIds": [
      "ING-045",
      "ING-003",
      "ING-040",
      "ING-209",
      "ING-031"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-015",
    "name": "فلفل دلمه شکم پر",
    "aliases": [],
    "category": "غذاهای ایرانی",
    "subcategory": "شکم پر",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "فلفل دلمه",
      "گوشت چرخ کرده",
      "برنج",
      "پیاز",
      "رب گوجه"
    ],
    "ingredientIds": [
      "ING-047",
      "ING-003",
      "ING-031",
      "ING-040",
      "ING-209"
    ],
    "tags": [
      "ایرانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-016",
    "name": "قیمه نثار",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "قزوینی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت گوسفندی",
      "لپه",
      "برنج",
      "پسته",
      "بادام",
      "پرتقال"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-027",
      "ING-031",
      "ING-124",
      "ING-121",
      "ING-075"
    ],
    "tags": [
      "ایرانی",
      "قزوینی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-017",
    "name": "ترش تره",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "گیلانی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سبزی",
      "تخم مرغ",
      "رب انار",
      "سیر",
      "روغن"
    ],
    "ingredientIds": [
      "ING-058",
      "ING-023",
      "ING-210",
      "ING-041",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "شمالی",
      "گیلانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-018",
    "name": "باقلاقاتق",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "گیلانی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "باقلا",
      "تخم مرغ",
      "سیر",
      "زردچوبه",
      "روغن"
    ],
    "ingredientIds": [
      "ING-029",
      "ING-023",
      "ING-041",
      "ING-181",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "شمالی",
      "گیلانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-019",
    "name": "اناربیج",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "گیلانی",
    "foodType": "main_dish",
    "visualAsset": "🍎",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت چرخ کرده",
      "رب انار",
      "سبزی",
      "پیاز",
      "گردو"
    ],
    "ingredientIds": [
      "ING-003",
      "ING-210",
      "ING-058",
      "ING-040",
      "ING-120"
    ],
    "tags": [
      "ایرانی",
      "شمالی",
      "گیلانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-020",
    "name": "تاس کباب",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "آذربایجانی",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت گوسفندی",
      "سیب زمینی",
      "پیاز",
      "رب گوجه",
      "آلو"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-039",
      "ING-040",
      "ING-209",
      "ING-089"
    ],
    "tags": [
      "ایرانی",
      "آذربایجانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-021",
    "name": "خورش خالو",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "شمالی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 155,
      "protein": 9,
      "carbs": 7,
      "fat": 10,
      "fiber": 2.5
    },
    "ingredients": [
      "گوشت گوسفندی",
      "گردو",
      "رب انار",
      "سبزی",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-120",
      "ING-210",
      "ING-058",
      "ING-040"
    ],
    "tags": [
      "ایرانی",
      "شمالی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-022",
    "name": "حلیم بادمجان",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "گیلانی",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "بادمجان",
      "گوشت گوسفندی",
      "پیاز",
      "کشک",
      "نعنا"
    ],
    "ingredientIds": [
      "ING-045",
      "ING-001",
      "ING-040",
      "ING-116",
      "ING-051"
    ],
    "tags": [
      "ایرانی",
      "شمالی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-023",
    "name": "ماهی سفید شکم پر",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "گیلانی",
    "foodType": "main_dish",
    "visualAsset": "🐟",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماهی",
      "سبزی",
      "گردو",
      "رب انار",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-018",
      "ING-058",
      "ING-120",
      "ING-210",
      "ING-040"
    ],
    "tags": [
      "ایرانی",
      "شمالی",
      "گیلانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-024",
    "name": "زیتون پرورده",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "گیلانی",
    "foodType": "side_dish",
    "visualAsset": "🍲",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "زیتون",
      "گردو",
      "رب انار",
      "سبزی",
      "سیر"
    ],
    "ingredientIds": [
      "ING-067",
      "ING-120",
      "ING-210",
      "ING-058",
      "ING-041"
    ],
    "tags": [
      "ایرانی",
      "شمالی",
      "گیلانی",
      "چاشنی"
    ]
  },
  {
    "id": "IR-MEAL-025",
    "name": "رشته خشکار",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "گیلانی",
    "foodType": "dessert",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "رشته",
      "گردو",
      "شکر",
      "دارچین"
    ],
    "ingredientIds": [
      "ING-034",
      "ING-120",
      "ING-176",
      "ING-182"
    ],
    "tags": [
      "ایرانی",
      "شمالی",
      "گیلانی",
      "شیرین"
    ]
  },
  {
    "id": "IR-MEAL-026",
    "name": "کباب ترش گیلانی",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "گیلانی",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت گوسفندی",
      "رب انار",
      "گردو",
      "پیاز",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-210",
      "ING-120",
      "ING-040",
      "ING-078"
    ],
    "tags": [
      "ایرانی",
      "شمالی",
      "گیلانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-027",
    "name": "میرزاقاسمی با تن",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "گیلانی",
    "foodType": "main_dish",
    "visualAsset": "🍲",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "بادمجان",
      "سیر",
      "گوجه",
      "تخم مرغ",
      "کره"
    ],
    "ingredientIds": [
      "ING-045",
      "ING-041",
      "ING-043",
      "ING-023",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "شمالی",
      "گیلانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-MEAL-028",
    "name": "باقلا پلو گیلانی",
    "aliases": [],
    "category": "غذاهای محلی ایران",
    "subcategory": "گیلانی",
    "foodType": "main_dish",
    "visualAsset": "🍚",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "برنج",
      "باقلا",
      "مرغ",
      "شوید",
      "کره"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-029",
      "ING-016",
      "ING-053",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "شمالی",
      "گیلانی",
      "ناهار",
      "شام"
    ]
  },
  {
    "id": "IR-BREAD-001",
    "name": "نان سنگک",
    "aliases": [
      "سنگک"
    ],
    "category": "نان",
    "subcategory": "نان سنتی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "آب",
      "نمک",
      "خمیرمایه"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175",
      "ING-215"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "سنتی"
    ]
  },
  {
    "id": "IR-BREAD-002",
    "name": "نان بربری",
    "aliases": [
      "بربری"
    ],
    "category": "نان",
    "subcategory": "نان سنتی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "آب",
      "نمک",
      "خمیرمایه",
      "کنجد"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175",
      "ING-215",
      "ING-126"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "سنتی"
    ]
  },
  {
    "id": "IR-BREAD-003",
    "name": "نان لواش",
    "aliases": [
      "لواش"
    ],
    "category": "نان",
    "subcategory": "نان سنتی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "آب",
      "نمک",
      "خمیرمایه"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175",
      "ING-215"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "سنتی"
    ]
  },
  {
    "id": "IR-BREAD-004",
    "name": "نان تافتون",
    "aliases": [
      "تافتون"
    ],
    "category": "نان",
    "subcategory": "نان سنتی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "آب",
      "نمک",
      "خمیرمایه"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175",
      "ING-215"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "سنتی"
    ]
  },
  {
    "id": "IR-BREAD-005",
    "name": "نان باگت",
    "aliases": [
      "باگت"
    ],
    "category": "نان",
    "subcategory": "نان فرنگی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "آب",
      "نمک",
      "خمیرمایه"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175",
      "ING-215"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-BREAD-006",
    "name": "نان تست",
    "aliases": [
      "تست"
    ],
    "category": "نان",
    "subcategory": "نان فرنگی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "آب",
      "نمک",
      "خمیرمایه"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175",
      "ING-215"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-BREAD-007",
    "name": "نان همبرگری",
    "aliases": [
      "همبرگری"
    ],
    "category": "نان",
    "subcategory": "نان فرنگی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "آب",
      "نمک",
      "خمیرمایه",
      "کنجد"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175",
      "ING-215",
      "ING-126"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-BREAD-008",
    "name": "نان پیتا",
    "aliases": [
      "پیتا"
    ],
    "category": "نان",
    "subcategory": "نان فرنگی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "آب",
      "نمک",
      "خمیرمایه"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175",
      "ING-215"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-BREAD-009",
    "name": "نان تورتلا",
    "aliases": [
      "تورتلا"
    ],
    "category": "نان",
    "subcategory": "نان فرنگی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "آب",
      "نمک",
      "خمیرمایه"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175",
      "ING-215"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-BREAD-010",
    "name": "نان بربری کنجدی",
    "aliases": [],
    "category": "نان",
    "subcategory": "نان سنتی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "آب",
      "نمک",
      "کنجد"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175",
      "ING-126"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "سنتی"
    ]
  },
  {
    "id": "IR-BREAD-011",
    "name": "نان شیرمال",
    "aliases": [],
    "category": "نان",
    "subcategory": "نان شیرین",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "شیر",
      "شکر",
      "کره",
      "خمیرمایه"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-110",
      "ING-176",
      "ING-113",
      "ING-215"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "شیرین"
    ]
  },
  {
    "id": "IR-BREAD-012",
    "name": "نان شیر",
    "aliases": [
      "نان شیرین"
    ],
    "category": "نان",
    "subcategory": "نان شیرین",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "شیر",
      "شکر",
      "کره"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-110",
      "ING-176",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "شیرین"
    ]
  },
  {
    "id": "IR-BREAD-013",
    "name": "نان خرمایی",
    "aliases": [],
    "category": "نان",
    "subcategory": "نان شیرین",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "خرما",
      "کره",
      "شیر"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-106",
      "ING-113",
      "ING-110"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "شیرین"
    ]
  },
  {
    "id": "IR-BREAD-014",
    "name": "نان سبوس دار",
    "aliases": [],
    "category": "نان",
    "subcategory": "نان رژیمی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد سبوس دار",
      "آب",
      "نمک",
      "خمیرمایه"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175",
      "ING-215"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "رژیمی"
    ]
  },
  {
    "id": "IR-BREAD-015",
    "name": "نان جو",
    "aliases": [],
    "category": "نان",
    "subcategory": "نان رژیمی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد جو",
      "آب",
      "نمک",
      "خمیرمایه"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175",
      "ING-215"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "رژیمی"
    ]
  },
  {
    "id": "IR-BREAD-016",
    "name": "نان چاپاتی",
    "aliases": [
      "چاپاتی"
    ],
    "category": "نان",
    "subcategory": "نان فرنگی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "آب",
      "نمک"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-BREAD-017",
    "name": "نان تردک",
    "aliases": [],
    "category": "نان",
    "subcategory": "نان سنتی",
    "foodType": "bread",
    "visualAsset": "🍞",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آرد گندم",
      "آب",
      "نمک",
      "خمیرمایه"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-158",
      "ING-175",
      "ING-215"
    ],
    "tags": [
      "ایرانی",
      "نانی",
      "سنتی"
    ]
  },
  {
    "id": "IR-MEAT-001",
    "name": "گوشت گوسفندی",
    "aliases": [],
    "category": "گوشت",
    "subcategory": "گوشت قرمز",
    "foodType": "ingredient",
    "visualAsset": "🥩",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت گوسفند"
    ],
    "ingredientIds": [
      "ING-001"
    ],
    "tags": [
      "پروتئینی",
      "گوشت"
    ]
  },
  {
    "id": "IR-MEAT-002",
    "name": "گوشت گاو",
    "aliases": [],
    "category": "گوشت",
    "subcategory": "گوشت قرمز",
    "foodType": "ingredient",
    "visualAsset": "🥩",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت گاو"
    ],
    "ingredientIds": [
      "ING-002"
    ],
    "tags": [
      "پروتئینی",
      "گوشت"
    ]
  },
  {
    "id": "IR-MEAT-003",
    "name": "گوشت چرخ کرده",
    "aliases": [],
    "category": "گوشت",
    "subcategory": "گوشت قرمز",
    "foodType": "ingredient",
    "visualAsset": "🥩",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت چرخ کرده"
    ],
    "ingredientIds": [
      "ING-003"
    ],
    "tags": [
      "پروتئینی",
      "گوشت"
    ]
  },
  {
    "id": "IR-MEAT-004",
    "name": "استیک گوسفندی",
    "aliases": [],
    "category": "گوشت",
    "subcategory": "گوشت قرمز",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت گوسفندی",
      "کره",
      "نمک",
      "فلفل"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-113",
      "ING-175",
      "ING-183"
    ],
    "tags": [
      "پروتئینی",
      "گوشت",
      "رستورانی"
    ]
  },
  {
    "id": "IR-MEAT-005",
    "name": "استیک گاو",
    "aliases": [],
    "category": "گوشت",
    "subcategory": "گوشت قرمز",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت گاو",
      "کره",
      "نمک",
      "فلفل"
    ],
    "ingredientIds": [
      "ING-002",
      "ING-113",
      "ING-175",
      "ING-183"
    ],
    "tags": [
      "پروتئینی",
      "گوشت",
      "رستورانی"
    ]
  },
  {
    "id": "IR-MEAT-006",
    "name": "ماهیچه",
    "aliases": [],
    "category": "گوشت",
    "subcategory": "گوشت قرمز",
    "foodType": "main_dish",
    "visualAsset": "🐟",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت گوسفندی",
      "پیاز",
      "زعفران",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-040",
      "ING-180",
      "ING-078"
    ],
    "tags": [
      "پروتئینی",
      "گوشت",
      "سنتی"
    ]
  },
  {
    "id": "IR-MEAT-007",
    "name": "زبان گوسفند",
    "aliases": [],
    "category": "گوشت",
    "subcategory": "گوشت قرمز",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "زبان",
      "پیاز",
      "نعنا",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-005",
      "ING-040",
      "ING-051",
      "ING-078"
    ],
    "tags": [
      "پروتئینی",
      "گوشت"
    ]
  },
  {
    "id": "IR-MEAT-008",
    "name": "جگر گوسفند",
    "aliases": [],
    "category": "گوشت",
    "subcategory": "گوشت قرمز",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "جگر",
      "پیاز",
      "لیمو",
      "روغن"
    ],
    "ingredientIds": [
      "ING-004",
      "ING-040",
      "ING-078",
      "ING-174"
    ],
    "tags": [
      "پروتئینی",
      "گوشت"
    ]
  },
  {
    "id": "IR-MEAT-009",
    "name": "دل و قلوه",
    "aliases": [],
    "category": "گوشت",
    "subcategory": "گوشت قرمز",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "دل",
      "قلوه",
      "پیاز",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-004",
      "ING-040",
      "ING-078"
    ],
    "tags": [
      "پروتئینی",
      "گوشت"
    ]
  },
  {
    "id": "IR-MEAT-010",
    "name": "سوسیس گوشت",
    "aliases": [],
    "category": "گوشت",
    "subcategory": "فرآورده گوشتی",
    "foodType": "ingredient",
    "visualAsset": "🥩",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت",
      "ادویه",
      "نمک"
    ],
    "ingredientIds": [
      "ING-008",
      "ING-188",
      "ING-175"
    ],
    "tags": [
      "پروتئینی",
      "فرآورده"
    ]
  },
  {
    "id": "IR-MEAT-011",
    "name": "کالباس گوشت",
    "aliases": [],
    "category": "گوشت",
    "subcategory": "فرآورده گوشتی",
    "foodType": "ingredient",
    "visualAsset": "🥩",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت",
      "ادویه",
      "نمک"
    ],
    "ingredientIds": [
      "ING-009",
      "ING-188",
      "ING-175"
    ],
    "tags": [
      "پروتئینی",
      "فرآورده"
    ]
  },
  {
    "id": "IR-MEAT-012",
    "name": "گوشت همبرگری",
    "aliases": [],
    "category": "گوشت",
    "subcategory": "فرآورده گوشتی",
    "foodType": "ingredient",
    "visualAsset": "🥩",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت چرخ کرده",
      "پیاز",
      "ادویه"
    ],
    "ingredientIds": [
      "ING-003",
      "ING-040",
      "ING-188"
    ],
    "tags": [
      "پروتئینی",
      "فرآورده"
    ]
  },
  {
    "id": "IR-POULTRY-001",
    "name": "مرغ",
    "aliases": [],
    "category": "مرغ",
    "subcategory": "مرغ کامل",
    "foodType": "ingredient",
    "visualAsset": "🍗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "مرغ"
    ],
    "ingredientIds": [
      "ING-016"
    ],
    "tags": [
      "پروتئینی",
      "مرغ"
    ]
  },
  {
    "id": "IR-POULTRY-002",
    "name": "سینه مرغ",
    "aliases": [],
    "category": "مرغ",
    "subcategory": "مرغ",
    "foodType": "ingredient",
    "visualAsset": "🍗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سینه مرغ"
    ],
    "ingredientIds": [
      "ING-016"
    ],
    "tags": [
      "پروتئینی",
      "مرغ"
    ]
  },
  {
    "id": "IR-POULTRY-003",
    "name": "ران مرغ",
    "aliases": [],
    "category": "مرغ",
    "subcategory": "مرغ",
    "foodType": "ingredient",
    "visualAsset": "🍗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ران مرغ"
    ],
    "ingredientIds": [
      "ING-016"
    ],
    "tags": [
      "پروتئینی",
      "مرغ"
    ]
  },
  {
    "id": "IR-POULTRY-004",
    "name": "بال مرغ",
    "aliases": [],
    "category": "مرغ",
    "subcategory": "مرغ",
    "foodType": "ingredient",
    "visualAsset": "🍗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "بال مرغ"
    ],
    "ingredientIds": [
      "ING-016"
    ],
    "tags": [
      "پروتئینی",
      "مرغ"
    ]
  },
  {
    "id": "IR-POULTRY-006",
    "name": "مرغ سوخاری",
    "aliases": [
      "سوخاری"
    ],
    "category": "مرغ",
    "subcategory": "مرغ سوخاری",
    "foodType": "main_dish",
    "visualAsset": "🍗",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "مرغ",
      "آرد",
      "تخم مرغ",
      "پودر سوخاری",
      "روغن"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-037",
      "ING-023",
      "ING-212",
      "ING-174"
    ],
    "tags": [
      "پروتئینی",
      "مرغ",
      "فست فود",
      "رستورانی"
    ]
  },
  {
    "id": "IR-POULTRY-007",
    "name": "مرغ بریان",
    "aliases": [],
    "category": "مرغ",
    "subcategory": "مرغ بریان",
    "foodType": "main_dish",
    "visualAsset": "🍗",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "مرغ",
      "زعفران",
      "کره",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-180",
      "ING-113",
      "ING-078"
    ],
    "tags": [
      "پروتئینی",
      "مرغ",
      "سنتی"
    ]
  },
  {
    "id": "IR-POULTRY-008",
    "name": "مرغ شکم پر",
    "aliases": [],
    "category": "مرغ",
    "subcategory": "مرغ شکم پر",
    "foodType": "main_dish",
    "visualAsset": "🍗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "مرغ",
      "برنج",
      "کشمش",
      "زعفران",
      "کره"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-031",
      "ING-109",
      "ING-180",
      "ING-113"
    ],
    "tags": [
      "پروتئینی",
      "مرغ",
      "سنتی"
    ]
  },
  {
    "id": "IR-POULTRY-009",
    "name": "بوقلمون",
    "aliases": [],
    "category": "مرغ",
    "subcategory": "بوقلمون",
    "foodType": "ingredient",
    "visualAsset": "🍗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت بوقلمون"
    ],
    "ingredientIds": [
      "ING-017"
    ],
    "tags": [
      "پروتئینی",
      "مرغ"
    ]
  },
  {
    "id": "IR-POULTRY-010",
    "name": "سینه بوقلمون",
    "aliases": [],
    "category": "مرغ",
    "subcategory": "بوقلمون",
    "foodType": "ingredient",
    "visualAsset": "🍗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سینه بوقلمون"
    ],
    "ingredientIds": [
      "ING-017"
    ],
    "tags": [
      "پروتئینی",
      "مرغ"
    ]
  },
  {
    "id": "IR-POULTRY-011",
    "name": "شنیسل مرغ",
    "aliases": [
      "شنیسل"
    ],
    "category": "مرغ",
    "subcategory": "مرغ سوخاری",
    "foodType": "main_dish",
    "visualAsset": "🍗",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سینه مرغ",
      "آرد",
      "تخم مرغ",
      "پودر سوخاری",
      "روغن"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-037",
      "ING-023",
      "ING-212",
      "ING-174"
    ],
    "tags": [
      "پروتئینی",
      "مرغ",
      "فست فود"
    ]
  },
  {
    "id": "IR-POULTRY-012",
    "name": "ناگت مرغ",
    "aliases": [],
    "category": "مرغ",
    "subcategory": "فرآورده مرغ",
    "foodType": "ingredient",
    "visualAsset": "🍗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "مرغ چرخ کرده",
      "آرد",
      "ادویه"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-037",
      "ING-188"
    ],
    "tags": [
      "پروتئینی",
      "مرغ",
      "فست فود"
    ]
  },
  {
    "id": "IR-FISH-001",
    "name": "ماهی سفید",
    "aliases": [],
    "category": "ماهی و غذاهای دریایی",
    "subcategory": "ماهی شمال",
    "foodType": "ingredient",
    "visualAsset": "🐟",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماهی سفید"
    ],
    "ingredientIds": [
      "ING-018"
    ],
    "tags": [
      "پروتئینی",
      "دریایی"
    ]
  },
  {
    "id": "IR-FISH-002",
    "name": "ماهی قزل آلا",
    "aliases": [
      "قزل آلا"
    ],
    "category": "ماهی و غذاهای دریایی",
    "subcategory": "ماهی",
    "foodType": "ingredient",
    "visualAsset": "🐟",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماهی قزل آلا"
    ],
    "ingredientIds": [
      "ING-018"
    ],
    "tags": [
      "پروتئینی",
      "دریایی"
    ]
  },
  {
    "id": "IR-FISH-003",
    "name": "ماهی کیلکا",
    "aliases": [],
    "category": "ماهی و غذاهای دریایی",
    "subcategory": "ماهی",
    "foodType": "ingredient",
    "visualAsset": "🐟",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماهی کیلکا"
    ],
    "ingredientIds": [
      "ING-018"
    ],
    "tags": [
      "پروتئینی",
      "دریایی"
    ]
  },
  {
    "id": "IR-FISH-004",
    "name": "ماهی حلوا",
    "aliases": [],
    "category": "ماهی و غذاهای دریایی",
    "subcategory": "ماهی جنوب",
    "foodType": "ingredient",
    "visualAsset": "🐟",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماهی حلوا"
    ],
    "ingredientIds": [
      "ING-018"
    ],
    "tags": [
      "پروتئینی",
      "دریایی"
    ]
  },
  {
    "id": "IR-FISH-005",
    "name": "ماهی شیر",
    "aliases": [],
    "category": "ماهی و غذاهای دریایی",
    "subcategory": "ماهی جنوب",
    "foodType": "ingredient",
    "visualAsset": "🐟",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماهی شیر"
    ],
    "ingredientIds": [
      "ING-018"
    ],
    "tags": [
      "پروتئینی",
      "دریایی"
    ]
  },
  {
    "id": "IR-FISH-006",
    "name": "ماهی تن",
    "aliases": [],
    "category": "ماهی و غذاهای دریایی",
    "subcategory": "کنسرو",
    "foodType": "ingredient",
    "visualAsset": "🐟",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماهی تن",
      "روغن",
      "نمک"
    ],
    "ingredientIds": [
      "ING-018",
      "ING-174",
      "ING-175"
    ],
    "tags": [
      "پروتئینی",
      "دریایی",
      "کنسرو"
    ]
  },
  {
    "id": "IR-FISH-007",
    "name": "ماهی سالمون",
    "aliases": [
      "سالمون"
    ],
    "category": "ماهی و غذاهای دریایی",
    "subcategory": "ماهی",
    "foodType": "ingredient",
    "visualAsset": "🐟",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماهی سالمون"
    ],
    "ingredientIds": [
      "ING-018"
    ],
    "tags": [
      "پروتئینی",
      "دریایی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-FISH-008",
    "name": "میگو",
    "aliases": [],
    "category": "ماهی و غذاهای دریایی",
    "subcategory": "میگو",
    "foodType": "ingredient",
    "visualAsset": "🐟",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "میگو"
    ],
    "ingredientIds": [
      "ING-019"
    ],
    "tags": [
      "پروتئینی",
      "دریایی"
    ]
  },
  {
    "id": "IR-FISH-009",
    "name": "خرچنگ",
    "aliases": [],
    "category": "ماهی و غذاهای دریایی",
    "subcategory": "خرچنگ",
    "foodType": "ingredient",
    "visualAsset": "🐟",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خرچنگ"
    ],
    "ingredientIds": [
      "ING-020"
    ],
    "tags": [
      "پروتئینی",
      "دریایی"
    ]
  },
  {
    "id": "IR-FISH-010",
    "name": "ماهی دودی",
    "aliases": [],
    "category": "ماهی و غذاهای دریایی",
    "subcategory": "ماهی دودی",
    "foodType": "ingredient",
    "visualAsset": "🐟",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماهی دودی"
    ],
    "ingredientIds": [
      "ING-018"
    ],
    "tags": [
      "پروتئینی",
      "دریایی"
    ]
  },
  {
    "id": "IR-FISH-011",
    "name": "ماهی سرخ شده",
    "aliases": [],
    "category": "ماهی و غذاهای دریایی",
    "subcategory": "ماهی سرخ شده",
    "foodType": "main_dish",
    "visualAsset": "🐟",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماهی",
      "آرد",
      "زردچوبه",
      "روغن"
    ],
    "ingredientIds": [
      "ING-018",
      "ING-037",
      "ING-181",
      "ING-174"
    ],
    "tags": [
      "پروتئینی",
      "دریایی"
    ]
  },
  {
    "id": "IR-FISH-012",
    "name": "میگو سوخاری",
    "aliases": [],
    "category": "ماهی و غذاهای دریایی",
    "subcategory": "میگو",
    "foodType": "main_dish",
    "visualAsset": "🐟",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "میگو",
      "آرد",
      "تخم مرغ",
      "پودر سوخاری",
      "روغن"
    ],
    "ingredientIds": [
      "ING-019",
      "ING-037",
      "ING-023",
      "ING-212",
      "ING-174"
    ],
    "tags": [
      "پروتئینی",
      "دریایی",
      "فست فود"
    ]
  },
  {
    "id": "IR-EGG-001",
    "name": "تخم مرغ",
    "aliases": [],
    "category": "تخم مرغ",
    "subcategory": "تخم مرغ",
    "foodType": "ingredient",
    "visualAsset": "🍳",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "تخم مرغ"
    ],
    "ingredientIds": [
      "ING-023"
    ],
    "tags": [
      "پروتئینی"
    ]
  },
  {
    "id": "IR-EGG-002",
    "name": "زرده تخم مرغ",
    "aliases": [],
    "category": "تخم مرغ",
    "subcategory": "تخم مرغ",
    "foodType": "ingredient",
    "visualAsset": "🍳",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "زرده تخم مرغ"
    ],
    "ingredientIds": [
      "ING-023"
    ],
    "tags": [
      "پروتئینی"
    ]
  },
  {
    "id": "IR-EGG-003",
    "name": "سفیده تخم مرغ",
    "aliases": [],
    "category": "تخم مرغ",
    "subcategory": "تخم مرغ",
    "foodType": "ingredient",
    "visualAsset": "🍳",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "سفیده تخم مرغ"
    ],
    "ingredientIds": [
      "ING-023"
    ],
    "tags": [
      "پروتئینی"
    ]
  },
  {
    "id": "IR-EGG-004",
    "name": "تخم مرغ عسلی",
    "aliases": [],
    "category": "تخم مرغ",
    "subcategory": "تخم مرغ",
    "foodType": "main_dish",
    "visualAsset": "🍳",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "تخم مرغ"
    ],
    "ingredientIds": [
      "ING-023"
    ],
    "tags": [
      "پروتئینی",
      "صبحانه"
    ]
  },
  {
    "id": "IR-EGG-007",
    "name": "املت قارچ",
    "aliases": [],
    "category": "تخم مرغ",
    "subcategory": "تخم مرغ",
    "foodType": "main_dish",
    "visualAsset": "🍳",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "تخم مرغ",
      "قارچ",
      "روغن"
    ],
    "ingredientIds": [
      "ING-023",
      "ING-059",
      "ING-174"
    ],
    "tags": [
      "پروتئینی",
      "صبحانه"
    ]
  },
  {
    "id": "IR-EGG-008",
    "name": "املت پنیر",
    "aliases": [],
    "category": "تخم مرغ",
    "subcategory": "تخم مرغ",
    "foodType": "main_dish",
    "visualAsset": "🍳",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 60
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 180,
      "protein": 9,
      "carbs": 12,
      "fat": 11,
      "fiber": 1.5
    },
    "ingredients": [
      "تخم مرغ",
      "پنیر",
      "روغن"
    ],
    "ingredientIds": [
      "ING-023",
      "ING-112",
      "ING-174"
    ],
    "tags": [
      "پروتئینی",
      "صبحانه"
    ]
  },
  {
    "id": "IR-LEGUME-001",
    "name": "لوبیا قرمز",
    "aliases": [],
    "category": "حبوبات",
    "subcategory": "لوبیا",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "لوبیا قرمز"
    ],
    "ingredientIds": [
      "ING-024"
    ],
    "tags": [
      "گیاهی",
      "پروتئینی",
      "حبوبات"
    ]
  },
  {
    "id": "IR-LEGUME-002",
    "name": "لوبیا چیتی",
    "aliases": [],
    "category": "حبوبات",
    "subcategory": "لوبیا",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "لوبیا چیتی"
    ],
    "ingredientIds": [
      "ING-024"
    ],
    "tags": [
      "گیاهی",
      "پروتئینی",
      "حبوبات"
    ]
  },
  {
    "id": "IR-LEGUME-003",
    "name": "لوبیا سبز",
    "aliases": [],
    "category": "حبوبات",
    "subcategory": "لوبیا",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "لوبیا سبز"
    ],
    "ingredientIds": [
      "ING-024"
    ],
    "tags": [
      "گیاهی",
      "حبوبات"
    ]
  },
  {
    "id": "IR-LEGUME-004",
    "name": "لوبیا چشم بلبلی",
    "aliases": [],
    "category": "حبوبات",
    "subcategory": "لوبیا",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "لوبیا چشم بلبلی"
    ],
    "ingredientIds": [
      "ING-024"
    ],
    "tags": [
      "گیاهی",
      "حبوبات"
    ]
  },
  {
    "id": "IR-LEGUME-005",
    "name": "نخود",
    "aliases": [],
    "category": "حبوبات",
    "subcategory": "نخود",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نخود"
    ],
    "ingredientIds": [
      "ING-025"
    ],
    "tags": [
      "گیاهی",
      "پروتئینی",
      "حبوبات"
    ]
  },
  {
    "id": "IR-LEGUME-006",
    "name": "نخودچی",
    "aliases": [],
    "category": "حبوبات",
    "subcategory": "نخود",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نخودچی"
    ],
    "ingredientIds": [
      "ING-025"
    ],
    "tags": [
      "گیاهی",
      "حبوبات",
      "تنقلات"
    ]
  },
  {
    "id": "IR-LEGUME-007",
    "name": "عدس",
    "aliases": [],
    "category": "حبوبات",
    "subcategory": "عدس",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "عدس"
    ],
    "ingredientIds": [
      "ING-026"
    ],
    "tags": [
      "گیاهی",
      "پروتئینی",
      "حبوبات"
    ]
  },
  {
    "id": "IR-LEGUME-008",
    "name": "لپه",
    "aliases": [],
    "category": "حبوبات",
    "subcategory": "لپه",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "لپه"
    ],
    "ingredientIds": [
      "ING-027"
    ],
    "tags": [
      "گیاهی",
      "پروتئینی",
      "حبوبات"
    ]
  },
  {
    "id": "IR-LEGUME-009",
    "name": "ماش",
    "aliases": [],
    "category": "حبوبات",
    "subcategory": "ماش",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماش"
    ],
    "ingredientIds": [
      "ING-028"
    ],
    "tags": [
      "گیاهی",
      "پروتئینی",
      "حبوبات"
    ]
  },
  {
    "id": "IR-LEGUME-010",
    "name": "باقلا",
    "aliases": [],
    "category": "حبوبات",
    "subcategory": "باقلا",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "باقلا"
    ],
    "ingredientIds": [
      "ING-029"
    ],
    "tags": [
      "گیاهی",
      "پروتئینی",
      "حبوبات"
    ]
  },
  {
    "id": "IR-LEGUME-011",
    "name": "باقلا خشک",
    "aliases": [],
    "category": "حبوبات",
    "subcategory": "باقلا",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "باقلا خشک"
    ],
    "ingredientIds": [
      "ING-029"
    ],
    "tags": [
      "گیاهی",
      "حبوبات"
    ]
  },
  {
    "id": "IR-LEGUME-012",
    "name": "سویا",
    "aliases": [],
    "category": "حبوبات",
    "subcategory": "سویا",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سویا"
    ],
    "ingredientIds": [
      "ING-030"
    ],
    "tags": [
      "گیاهی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-LEGUME-013",
    "name": "نخود سبز",
    "aliases": [],
    "category": "حبوبات",
    "subcategory": "نخود",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نخود سبز"
    ],
    "ingredientIds": [
      "ING-025"
    ],
    "tags": [
      "گیاهی",
      "حبوبات"
    ]
  },
  {
    "id": "IR-GRAIN-001",
    "name": "برنج سفید",
    "aliases": [],
    "category": "غلات",
    "subcategory": "برنج",
    "foodType": "ingredient",
    "visualAsset": "🍚",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "برنج سفید"
    ],
    "ingredientIds": [
      "ING-031"
    ],
    "tags": [
      "برنجی",
      "غلات"
    ]
  },
  {
    "id": "IR-GRAIN-002",
    "name": "برنج قهوه ای",
    "aliases": [],
    "category": "غلات",
    "subcategory": "برنج",
    "foodType": "ingredient",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "برنج قهوه ای"
    ],
    "ingredientIds": [
      "ING-031"
    ],
    "tags": [
      "برنجی",
      "غلات",
      "رژیمی"
    ]
  },
  {
    "id": "IR-GRAIN-003",
    "name": "برنج دم سیاه",
    "aliases": [],
    "category": "غلات",
    "subcategory": "برنج",
    "foodType": "ingredient",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "برنج دم سیاه"
    ],
    "ingredientIds": [
      "ING-031"
    ],
    "tags": [
      "برنجی",
      "غلات",
      "سنتی"
    ]
  },
  {
    "id": "IR-GRAIN-004",
    "name": "برنج طارم",
    "aliases": [],
    "category": "غلات",
    "subcategory": "برنج",
    "foodType": "ingredient",
    "visualAsset": "🍚",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "برنج طارم"
    ],
    "ingredientIds": [
      "ING-031"
    ],
    "tags": [
      "برنجی",
      "غلات"
    ]
  },
  {
    "id": "IR-GRAIN-005",
    "name": "برنج صدری",
    "aliases": [],
    "category": "غلات",
    "subcategory": "برنج",
    "foodType": "ingredient",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "برنج صدری"
    ],
    "ingredientIds": [
      "ING-031"
    ],
    "tags": [
      "برنجی",
      "غلات"
    ]
  },
  {
    "id": "IR-GRAIN-006",
    "name": "گندم",
    "aliases": [],
    "category": "غلات",
    "subcategory": "گندم",
    "foodType": "ingredient",
    "visualAsset": "🌾",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گندم"
    ],
    "ingredientIds": [
      "ING-032"
    ],
    "tags": [
      "غلات",
      "گیاهی"
    ]
  },
  {
    "id": "IR-GRAIN-007",
    "name": "جو",
    "aliases": [],
    "category": "غلات",
    "subcategory": "جو",
    "foodType": "ingredient",
    "visualAsset": "🌾",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "جو"
    ],
    "ingredientIds": [
      "ING-033"
    ],
    "tags": [
      "غلات",
      "گیاهی"
    ]
  },
  {
    "id": "IR-GRAIN-008",
    "name": "جو پرک",
    "aliases": [],
    "category": "غلات",
    "subcategory": "جو",
    "foodType": "ingredient",
    "visualAsset": "🌾",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "جو پرک"
    ],
    "ingredientIds": [
      "ING-033"
    ],
    "tags": [
      "غلات",
      "صبحانه"
    ]
  },
  {
    "id": "IR-GRAIN-009",
    "name": "بلغور",
    "aliases": [],
    "category": "غلات",
    "subcategory": "گندم",
    "foodType": "ingredient",
    "visualAsset": "🌾",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "بلغور گندم"
    ],
    "ingredientIds": [
      "ING-032"
    ],
    "tags": [
      "غلات",
      "گیاهی"
    ]
  },
  {
    "id": "IR-GRAIN-010",
    "name": "رشته آشی",
    "aliases": [],
    "category": "غلات",
    "subcategory": "رشته",
    "foodType": "ingredient",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 135,
      "protein": 5,
      "carbs": 18,
      "fat": 4.5,
      "fiber": 2.8
    },
    "ingredients": [
      "رشته آشی"
    ],
    "ingredientIds": [
      "ING-034"
    ],
    "tags": [
      "غلات",
      "نانی"
    ]
  },
  {
    "id": "IR-GRAIN-011",
    "name": "رشته پلویی",
    "aliases": [],
    "category": "غلات",
    "subcategory": "رشته",
    "foodType": "ingredient",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "رشته پلویی"
    ],
    "ingredientIds": [
      "ING-034"
    ],
    "tags": [
      "غلات",
      "نانی"
    ]
  },
  {
    "id": "IR-GRAIN-012",
    "name": "ماکارونی",
    "aliases": [],
    "category": "غلات",
    "subcategory": "ماکارونی",
    "foodType": "ingredient",
    "visualAsset": "🍝",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماکارونی"
    ],
    "ingredientIds": [
      "ING-035"
    ],
    "tags": [
      "غلات",
      "فرنگی"
    ]
  },
  {
    "id": "IR-GRAIN-013",
    "name": "اسپاگتی",
    "aliases": [],
    "category": "غلات",
    "subcategory": "ماکارونی",
    "foodType": "ingredient",
    "visualAsset": "🌾",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "اسپاگتی"
    ],
    "ingredientIds": [
      "ING-035"
    ],
    "tags": [
      "غلات",
      "فرنگی"
    ]
  },
  {
    "id": "IR-GRAIN-014",
    "name": "پنه",
    "aliases": [],
    "category": "غلات",
    "subcategory": "ماکارونی",
    "foodType": "ingredient",
    "visualAsset": "🌾",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "پنه"
    ],
    "ingredientIds": [
      "ING-035"
    ],
    "tags": [
      "غلات",
      "فرنگی"
    ]
  },
  {
    "id": "IR-GRAIN-015",
    "name": "فارفاله",
    "aliases": [],
    "category": "غلات",
    "subcategory": "ماکارونی",
    "foodType": "ingredient",
    "visualAsset": "🌾",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "فارفاله"
    ],
    "ingredientIds": [
      "ING-035"
    ],
    "tags": [
      "غلات",
      "فرنگی"
    ]
  },
  {
    "id": "IR-GRAIN-016",
    "name": "لازانیا",
    "aliases": [],
    "category": "غلات",
    "subcategory": "ماکارونی",
    "foodType": "ingredient",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "لازانیا"
    ],
    "ingredientIds": [
      "ING-035"
    ],
    "tags": [
      "غلات",
      "فرنگی"
    ]
  },
  {
    "id": "IR-GRAIN-017",
    "name": "جو دوسر",
    "aliases": [
      "بلغور جو دوسر"
    ],
    "category": "غلات",
    "subcategory": "جو",
    "foodType": "ingredient",
    "visualAsset": "🌾",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "جو دوسر"
    ],
    "ingredientIds": [
      "ING-033"
    ],
    "tags": [
      "غلات",
      "صبحانه",
      "رژیمی"
    ]
  },
  {
    "id": "IR-GRAIN-018",
    "name": "کینوا",
    "aliases": [],
    "category": "غلات",
    "subcategory": "کینوا",
    "foodType": "ingredient",
    "visualAsset": "🌾",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "کینوا"
    ],
    "ingredientIds": [
      "ING-036"
    ],
    "tags": [
      "غلات",
      "فرنگی",
      "رژیمی"
    ]
  },
  {
    "id": "IR-GRAIN-019",
    "name": "آرد گندم",
    "aliases": [],
    "category": "غلات",
    "subcategory": "آرد",
    "foodType": "ingredient",
    "visualAsset": "🌾",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد گندم"
    ],
    "ingredientIds": [
      "ING-037"
    ],
    "tags": [
      "غلات",
      "پایه"
    ]
  },
  {
    "id": "IR-GRAIN-020",
    "name": "آرد برنج",
    "aliases": [],
    "category": "غلات",
    "subcategory": "آرد",
    "foodType": "ingredient",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد برنج"
    ],
    "ingredientIds": [
      "ING-037"
    ],
    "tags": [
      "غلات",
      "پایه"
    ]
  },
  {
    "id": "IR-VEG-001",
    "name": "سیب زمینی",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "غده",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "سیب زمینی"
    ],
    "ingredientIds": [
      "ING-039"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-002",
    "name": "پیاز",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "غده",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "پیاز"
    ],
    "ingredientIds": [
      "ING-040"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات",
      "پایه"
    ]
  },
  {
    "id": "IR-VEG-003",
    "name": "سیر",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "غده",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "سیر"
    ],
    "ingredientIds": [
      "ING-041"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-004",
    "name": "هویج",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "ریشه",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "هویج"
    ],
    "ingredientIds": [
      "ING-042"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-005",
    "name": "گوجه فرنگی",
    "aliases": [
      "گوجه"
    ],
    "category": "سبزیجات",
    "subcategory": "میوه ای",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "گوجه فرنگی"
    ],
    "ingredientIds": [
      "ING-043"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-006",
    "name": "خیار",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "میوه ای",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "خیار"
    ],
    "ingredientIds": [
      "ING-044"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-007",
    "name": "خیارشور",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "ترشی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "خیار",
      "سرکه",
      "نمک"
    ],
    "ingredientIds": [
      "ING-044",
      "ING-178",
      "ING-175"
    ],
    "tags": [
      "گیاهی",
      "ترشی"
    ]
  },
  {
    "id": "IR-VEG-008",
    "name": "بادمجان",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "میوه ای",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "بادمجان"
    ],
    "ingredientIds": [
      "ING-045"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-009",
    "name": "کدو سبز",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "میوه ای",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "کدو سبز"
    ],
    "ingredientIds": [
      "ING-046"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-010",
    "name": "کدو حلوایی",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "میوه ای",
    "foodType": "ingredient",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "کدو حلوایی"
    ],
    "ingredientIds": [
      "ING-046"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-011",
    "name": "فلفل دلمه",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "میوه ای",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "فلفل دلمه"
    ],
    "ingredientIds": [
      "ING-047"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-012",
    "name": "فلفل تند",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "میوه ای",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "فلفل تند"
    ],
    "ingredientIds": [
      "ING-047"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات",
      "تند"
    ]
  },
  {
    "id": "IR-VEG-013",
    "name": "کلم",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "برگی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "کلم"
    ],
    "ingredientIds": [
      "ING-048"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-014",
    "name": "کلم بروکلی",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "برگی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "کلم بروکلی"
    ],
    "ingredientIds": [
      "ING-048"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-015",
    "name": "کلم پیچ",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "برگی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "کلم پیچ"
    ],
    "ingredientIds": [
      "ING-048"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-016",
    "name": "کاهو",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "برگی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "کاهو"
    ],
    "ingredientIds": [
      "ING-049"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-017",
    "name": "اسفناج",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "برگی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "اسفناج"
    ],
    "ingredientIds": [
      "ING-050"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-018",
    "name": "سبزی خوردن",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "سبزی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "جعفری",
      "ریحان",
      "تره",
      "نعنا",
      "پیازچه"
    ],
    "ingredientIds": [
      "ING-058"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات",
      "سنتی"
    ]
  },
  {
    "id": "IR-VEG-019",
    "name": "جعفری",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "سبزی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "جعفری"
    ],
    "ingredientIds": [
      "ING-052"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-020",
    "name": "ریحان",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "سبزی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "ریحان"
    ],
    "ingredientIds": [
      "ING-056"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-021",
    "name": "نعنا",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "سبزی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "نعنا"
    ],
    "ingredientIds": [
      "ING-051"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-022",
    "name": "تره",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "سبزی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "تره"
    ],
    "ingredientIds": [
      "ING-055"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-023",
    "name": "شوید",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "سبزی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "شوید"
    ],
    "ingredientIds": [
      "ING-053"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-024",
    "name": "گشنیز",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "سبزی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "گشنیز"
    ],
    "ingredientIds": [
      "ING-054"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-025",
    "name": "قارچ",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "قارچ",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "قارچ"
    ],
    "ingredientIds": [
      "ING-059"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-026",
    "name": "ذرت",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "غلات سبز",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "ذرت"
    ],
    "ingredientIds": [
      "ING-060"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-027",
    "name": "نخود فرنگی",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "حبوبات سبز",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "نخود فرنگی"
    ],
    "ingredientIds": [
      "ING-025"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-029",
    "name": "چغندر",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "ریشه",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "چغندر"
    ],
    "ingredientIds": [
      "ING-061"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-030",
    "name": "شلغم",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "ریشه",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "شلغم"
    ],
    "ingredientIds": [
      "ING-062"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-031",
    "name": "ترب",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "ریشه",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "ترب"
    ],
    "ingredientIds": [
      "ING-063"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-032",
    "name": "تربچه",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "ریشه",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "تربچه"
    ],
    "ingredientIds": [
      "ING-063"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-033",
    "name": "کرفس",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "ساقه",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "کرفس"
    ],
    "ingredientIds": [
      "ING-064"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-034",
    "name": "مارچوبه",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "ساقه",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "مارچوبه"
    ],
    "ingredientIds": [
      "ING-065"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات",
      "فرنگی"
    ]
  },
  {
    "id": "IR-VEG-035",
    "name": "بامیه",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "میوه ای",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "بامیه"
    ],
    "ingredientIds": [
      "ING-066"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-036",
    "name": "بادمجان سرخ شده",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "بادمجان",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "بادمجان",
      "روغن"
    ],
    "ingredientIds": [
      "ING-045",
      "ING-174"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-VEG-037",
    "name": "زیتون سبز",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "زیتون",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "زیتون سبز"
    ],
    "ingredientIds": [
      "ING-067"
    ],
    "tags": [
      "گیاهی",
      "زیتون"
    ]
  },
  {
    "id": "IR-VEG-038",
    "name": "زیتون سیاه",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "زیتون",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "زیتون سیاه"
    ],
    "ingredientIds": [
      "ING-067"
    ],
    "tags": [
      "گیاهی",
      "زیتون"
    ]
  },
  {
    "id": "IR-VEG-039",
    "name": "جوانه یونجه",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "جوانه",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "جوانه یونجه"
    ],
    "ingredientIds": [
      "ING-068"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات",
      "رژیمی"
    ]
  },
  {
    "id": "IR-VEG-040",
    "name": "ریواس",
    "aliases": [],
    "category": "سبزیجات",
    "subcategory": "ساقه",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 100
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 100
      },
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 30,
      "protein": 1.8,
      "carbs": 5.5,
      "fat": 0.4,
      "fiber": 2.5
    },
    "ingredients": [
      "ریواس"
    ],
    "ingredientIds": [
      "ING-069"
    ],
    "tags": [
      "گیاهی",
      "سبزیجات"
    ]
  },
  {
    "id": "IR-FRUIT-001",
    "name": "سیب",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "دانه دار",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "سیب"
    ],
    "ingredientIds": [
      "ING-074"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-002",
    "name": "پرتقال",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "مرکبات",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "پرتقال"
    ],
    "ingredientIds": [
      "ING-075"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-003",
    "name": "نارنگی",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "مرکبات",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "نارنگی"
    ],
    "ingredientIds": [
      "ING-076"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-004",
    "name": "لیمو ترش",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "مرکبات",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "لیمو ترش"
    ],
    "ingredientIds": [
      "ING-078"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-005",
    "name": "لیمو شیرین",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "مرکبات",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "لیمو شیرین"
    ],
    "ingredientIds": [
      "ING-078"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-006",
    "name": "گریپ فروت",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "مرکبات",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "گریپ فروت"
    ],
    "ingredientIds": [
      "ING-077"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-007",
    "name": "موز",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "گرمسیری",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "موز"
    ],
    "ingredientIds": [
      "ING-079"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-008",
    "name": "انگور",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "دانه دار",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "انگور"
    ],
    "ingredientIds": [
      "ING-080"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-009",
    "name": "هندوانه",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "جالیزی",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "هندوانه"
    ],
    "ingredientIds": [
      "ING-081"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-010",
    "name": "طالبی",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "جالیزی",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "طالبی"
    ],
    "ingredientIds": [
      "ING-082"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-011",
    "name": "خربزه",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "جالیزی",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "خربزه"
    ],
    "ingredientIds": [
      "ING-083"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-012",
    "name": "توت فرنگی",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "تابستانه",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "توت فرنگی"
    ],
    "ingredientIds": [
      "ING-084"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-013",
    "name": "گیلاس",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "هسته دار",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "گیلاس"
    ],
    "ingredientIds": [
      "ING-085"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-014",
    "name": "آلبالو",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "هسته دار",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "آلبالو"
    ],
    "ingredientIds": [
      "ING-086"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-015",
    "name": "هلو",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "هسته دار",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "هلو"
    ],
    "ingredientIds": [
      "ING-087"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-016",
    "name": "شلیل",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "هسته دار",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "شلیل"
    ],
    "ingredientIds": [
      "ING-087"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-017",
    "name": "زردآلو",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "هسته دار",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "زردآلو"
    ],
    "ingredientIds": [
      "ING-088"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-018",
    "name": "آلو",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "هسته دار",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "آلو"
    ],
    "ingredientIds": [
      "ING-089"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-019",
    "name": "آلو بخارا",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "هسته دار",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "آلو بخارا"
    ],
    "ingredientIds": [
      "ING-089"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-020",
    "name": "گلابی",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "دانه دار",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "گلابی"
    ],
    "ingredientIds": [
      "ING-090"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-021",
    "name": "به",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "دانه دار",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "به"
    ],
    "ingredientIds": [
      "ING-091"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-022",
    "name": "انار",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "پاییزی",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "انار"
    ],
    "ingredientIds": [
      "ING-092"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-023",
    "name": "خرمالو",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "پاییزی",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "خرمالو"
    ],
    "ingredientIds": [
      "ING-093"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-024",
    "name": "انجیر",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "تابستانه",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "انجیر"
    ],
    "ingredientIds": [
      "ING-094"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-025",
    "name": "کیوی",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "گرمسیری",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "کیوی"
    ],
    "ingredientIds": [
      "ING-095"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-026",
    "name": "آناناس",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "گرمسیری",
    "foodType": "ingredient",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آناناس"
    ],
    "ingredientIds": [
      "ING-096"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-027",
    "name": "انبه",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "گرمسیری",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "انبه"
    ],
    "ingredientIds": [
      "ING-097"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-028",
    "name": "نارگیل",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "گرمسیری",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "نارگیل"
    ],
    "ingredientIds": [
      "ING-098"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-029",
    "name": "توت سفید",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "تابستانه",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "توت سفید"
    ],
    "ingredientIds": [
      "ING-099"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-030",
    "name": "شاتوت",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "تابستانه",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "شاتوت"
    ],
    "ingredientIds": [
      "ING-099"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-031",
    "name": "بلوبری",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "تابستانه",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "بلوبری"
    ],
    "ingredientIds": [
      "ING-100"
    ],
    "tags": [
      "میوه",
      "گیاهی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-FRUIT-032",
    "name": "تمشک",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "تابستانه",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "تمشک"
    ],
    "ingredientIds": [
      "ING-101"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-033",
    "name": "ازگیل",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "پاییزی",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "ازگیل"
    ],
    "ingredientIds": [
      "ING-102"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-034",
    "name": "زالزالک",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "پاییزی",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "زالزالک"
    ],
    "ingredientIds": [
      "ING-103"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-035",
    "name": "عناب",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "پاییزی",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "عناب"
    ],
    "ingredientIds": [
      "ING-104"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-036",
    "name": "کنار",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "جنوبی",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "کنار"
    ],
    "ingredientIds": [
      "ING-105"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FRUIT-037",
    "name": "خرما",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "گرمسیری",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "خرما"
    ],
    "ingredientIds": [
      "ING-106"
    ],
    "tags": [
      "میوه",
      "گیاهی",
      "شیرین"
    ]
  },
  {
    "id": "IR-FRUIT-039",
    "name": "کیوی طلایی",
    "aliases": [],
    "category": "میوه ها",
    "subcategory": "گرمسیری",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 120
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 55,
      "protein": 0.8,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "ingredients": [
      "کیوی طلایی"
    ],
    "ingredientIds": [
      "ING-095"
    ],
    "tags": [
      "میوه",
      "گیاهی"
    ]
  },
  {
    "id": "IR-DAIRY-001",
    "name": "شیر",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "شیر",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 60,
      "protein": 2.5,
      "carbs": 3.5,
      "fat": 2,
      "fiber": 0
    },
    "ingredients": [
      "شیر"
    ],
    "ingredientIds": [
      "ING-110"
    ],
    "tags": [
      "لبنی",
      "نوشیدنی"
    ]
  },
  {
    "id": "IR-DAIRY-002",
    "name": "ماست",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "ماست",
    "foodType": "ingredient",
    "visualAsset": "🥛",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 65,
      "protein": 4,
      "carbs": 5,
      "fat": 3.5,
      "fiber": 0
    },
    "ingredients": [
      "ماست"
    ],
    "ingredientIds": [
      "ING-111"
    ],
    "tags": [
      "لبنی"
    ]
  },
  {
    "id": "IR-DAIRY-003",
    "name": "ماست چکیده",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "ماست",
    "foodType": "ingredient",
    "visualAsset": "🥛",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 65,
      "protein": 4,
      "carbs": 5,
      "fat": 3.5,
      "fiber": 0
    },
    "ingredients": [
      "ماست چکیده"
    ],
    "ingredientIds": [
      "ING-111"
    ],
    "tags": [
      "لبنی"
    ]
  },
  {
    "id": "IR-DAIRY-004",
    "name": "ماست یونانی",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "ماست",
    "foodType": "ingredient",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "ماست یونانی"
    ],
    "ingredientIds": [
      "ING-111"
    ],
    "tags": [
      "لبنی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DAIRY-005",
    "name": "پنیر سفید",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "پنیر",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "قوطی کبریت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "قوطی کبریت",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 250,
      "protein": 17,
      "carbs": 2,
      "fat": 20,
      "fiber": 0
    },
    "ingredients": [
      "پنیر سفید"
    ],
    "ingredientIds": [
      "ING-112"
    ],
    "tags": [
      "لبنی"
    ]
  },
  {
    "id": "IR-DAIRY-006",
    "name": "پنیر لیقوان",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "پنیر",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "قوطی کبریت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "قوطی کبریت",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 250,
      "protein": 17,
      "carbs": 2,
      "fat": 20,
      "fiber": 0
    },
    "ingredients": [
      "پنیر لیقوان"
    ],
    "ingredientIds": [
      "ING-112"
    ],
    "tags": [
      "لبنی",
      "سنتی"
    ]
  },
  {
    "id": "IR-DAIRY-007",
    "name": "پنیر پیتزا",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "پنیر",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "قوطی کبریت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "قوطی کبریت",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 250,
      "protein": 17,
      "carbs": 2,
      "fat": 20,
      "fiber": 0
    },
    "ingredients": [
      "پنیر پیتزا"
    ],
    "ingredientIds": [
      "ING-112"
    ],
    "tags": [
      "لبنی"
    ]
  },
  {
    "id": "IR-DAIRY-008",
    "name": "پنیر خامه ای",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "پنیر",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "قوطی کبریت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "قوطی کبریت",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 250,
      "protein": 17,
      "carbs": 2,
      "fat": 20,
      "fiber": 0
    },
    "ingredients": [
      "پنیر خامه ای"
    ],
    "ingredientIds": [
      "ING-112"
    ],
    "tags": [
      "لبنی"
    ]
  },
  {
    "id": "IR-DAIRY-009",
    "name": "پنیر فتا",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "پنیر",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "قوطی کبریت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "قوطی کبریت",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 250,
      "protein": 17,
      "carbs": 2,
      "fat": 20,
      "fiber": 0
    },
    "ingredients": [
      "پنیر فتا"
    ],
    "ingredientIds": [
      "ING-112"
    ],
    "tags": [
      "لبنی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DAIRY-010",
    "name": "پنیر پارمزان",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "پنیر",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "قوطی کبریت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "قوطی کبریت",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 250,
      "protein": 17,
      "carbs": 2,
      "fat": 20,
      "fiber": 0
    },
    "ingredients": [
      "پنیر پارمزان"
    ],
    "ingredientIds": [
      "ING-112"
    ],
    "tags": [
      "لبنی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DAIRY-011",
    "name": "کره",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "کره",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 65,
      "protein": 4,
      "carbs": 5,
      "fat": 3.5,
      "fiber": 0
    },
    "ingredients": [
      "کره"
    ],
    "ingredientIds": [
      "ING-113"
    ],
    "tags": [
      "لبنی"
    ]
  },
  {
    "id": "IR-DAIRY-012",
    "name": "خامه",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "خامه",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 65,
      "protein": 4,
      "carbs": 5,
      "fat": 3.5,
      "fiber": 0
    },
    "ingredients": [
      "خامه"
    ],
    "ingredientIds": [
      "ING-114"
    ],
    "tags": [
      "لبنی"
    ]
  },
  {
    "id": "IR-DAIRY-013",
    "name": "سرشیر",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "خامه",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 60,
      "protein": 2.5,
      "carbs": 3.5,
      "fat": 2,
      "fiber": 0
    },
    "ingredients": [
      "سرشیر"
    ],
    "ingredientIds": [
      "ING-114"
    ],
    "tags": [
      "لبنی",
      "سنتی"
    ]
  },
  {
    "id": "IR-DAIRY-014",
    "name": "دوغ",
    "aliases": [
      "دوغ بدون گاز"
    ],
    "category": "لبنیات",
    "subcategory": "نوشیدنی لبنی",
    "foodType": "ingredient",
    "visualAsset": "🥛",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 35,
      "protein": 2.5,
      "carbs": 3.5,
      "fat": 2,
      "fiber": 0
    },
    "ingredients": [
      "دوغ",
      "نمک",
      "نعنا"
    ],
    "ingredientIds": [
      "ING-115",
      "ING-175",
      "ING-051"
    ],
    "tags": [
      "لبنی",
      "نوشیدنی",
      "سنتی"
    ]
  },
  {
    "id": "IR-DAIRY-015",
    "name": "کشک",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "کشک",
    "foodType": "ingredient",
    "visualAsset": "🥛",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 65,
      "protein": 4,
      "carbs": 5,
      "fat": 3.5,
      "fiber": 0
    },
    "ingredients": [
      "کشک"
    ],
    "ingredientIds": [
      "ING-116"
    ],
    "tags": [
      "لبنی",
      "سنتی"
    ]
  },
  {
    "id": "IR-DAIRY-016",
    "name": "شیر پر چرب",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "شیر",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 60,
      "protein": 2.5,
      "carbs": 3.5,
      "fat": 2,
      "fiber": 0
    },
    "ingredients": [
      "شیر پر چرب"
    ],
    "ingredientIds": [
      "ING-110"
    ],
    "tags": [
      "لبنی"
    ]
  },
  {
    "id": "IR-DAIRY-017",
    "name": "شیر کم چرب",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "شیر",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 60,
      "protein": 2.5,
      "carbs": 3.5,
      "fat": 2,
      "fiber": 0
    },
    "ingredients": [
      "شیر کم چرب"
    ],
    "ingredientIds": [
      "ING-110"
    ],
    "tags": [
      "لبنی",
      "رژیمی"
    ]
  },
  {
    "id": "IR-DAIRY-018",
    "name": "شیر خشک",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "شیر",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 60,
      "protein": 2.5,
      "carbs": 3.5,
      "fat": 2,
      "fiber": 0
    },
    "ingredients": [
      "شیر خشک"
    ],
    "ingredientIds": [
      "ING-110"
    ],
    "tags": [
      "لبنی"
    ]
  },
  {
    "id": "IR-DAIRY-019",
    "name": "شیر غنی شده",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "شیر",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 60,
      "protein": 2.5,
      "carbs": 3.5,
      "fat": 2,
      "fiber": 0
    },
    "ingredients": [
      "شیر غنی شده"
    ],
    "ingredientIds": [
      "ING-110"
    ],
    "tags": [
      "لبنی"
    ]
  },
  {
    "id": "IR-DAIRY-020",
    "name": "بستنی",
    "aliases": [],
    "category": "لبنیات",
    "subcategory": "بستنی",
    "foodType": "ingredient",
    "visualAsset": "🧀",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 150
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 150
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 65,
      "protein": 4,
      "carbs": 5,
      "fat": 3.5,
      "fiber": 0
    },
    "ingredients": [
      "شیر",
      "شکر",
      "خامه"
    ],
    "ingredientIds": [
      "ING-117"
    ],
    "tags": [
      "لبنی",
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-NUT-001",
    "name": "گردو",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "مغز",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "گردو"
    ],
    "ingredientIds": [
      "ING-120"
    ],
    "tags": [
      "مغزی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-NUT-002",
    "name": "بادام",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "مغز",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "بادام"
    ],
    "ingredientIds": [
      "ING-121"
    ],
    "tags": [
      "مغزی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-NUT-003",
    "name": "بادام زمینی",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "مغز",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "بادام زمینی"
    ],
    "ingredientIds": [
      "ING-123"
    ],
    "tags": [
      "مغزی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-NUT-004",
    "name": "پسته",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "مغز",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "پسته"
    ],
    "ingredientIds": [
      "ING-124"
    ],
    "tags": [
      "مغزی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-NUT-005",
    "name": "فندق",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "مغز",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "فندق"
    ],
    "ingredientIds": [
      "ING-125"
    ],
    "tags": [
      "مغزی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-NUT-006",
    "name": "بادام هندی",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "مغز",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "بادام هندی"
    ],
    "ingredientIds": [
      "ING-122"
    ],
    "tags": [
      "مغزی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-NUT-007",
    "name": "کنجد",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "دانه",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "کنجد"
    ],
    "ingredientIds": [
      "ING-126"
    ],
    "tags": [
      "مغزی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-NUT-008",
    "name": "تخمه آفتابگردان",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "دانه",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "تخمه آفتابگردان"
    ],
    "ingredientIds": [
      "ING-128"
    ],
    "tags": [
      "مغزی",
      "تنقلات"
    ]
  },
  {
    "id": "IR-NUT-009",
    "name": "تخمه کدو",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "دانه",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "تخمه کدو"
    ],
    "ingredientIds": [
      "ING-128"
    ],
    "tags": [
      "مغزی",
      "تنقلات"
    ]
  },
  {
    "id": "IR-NUT-010",
    "name": "تخمه هندوانه",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "دانه",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "تخمه هندوانه"
    ],
    "ingredientIds": [
      "ING-128"
    ],
    "tags": [
      "مغزی",
      "تنقلات"
    ]
  },
  {
    "id": "IR-NUT-011",
    "name": "چیا",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "دانه",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "چیا"
    ],
    "ingredientIds": [
      "ING-129"
    ],
    "tags": [
      "مغزی",
      "رژیمی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-NUT-012",
    "name": "کتان",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "دانه",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "کتان"
    ],
    "ingredientIds": [
      "ING-130"
    ],
    "tags": [
      "مغزی",
      "رژیمی"
    ]
  },
  {
    "id": "IR-NUT-013",
    "name": "شاهدانه",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "دانه",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "شاهدانه"
    ],
    "ingredientIds": [
      "ING-131"
    ],
    "tags": [
      "مغزی"
    ]
  },
  {
    "id": "IR-NUT-014",
    "name": "ارده",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "کرم مغزی",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "کنجد",
      "روغن"
    ],
    "ingredientIds": [
      "ING-127"
    ],
    "tags": [
      "مغزی",
      "صبحانه"
    ]
  },
  {
    "id": "IR-NUT-015",
    "name": "کره بادام زمینی",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "کرم مغزی",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "بادام زمینی",
      "روغن"
    ],
    "ingredientIds": [
      "ING-132"
    ],
    "tags": [
      "مغزی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-NUT-016",
    "name": "کره بادام",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "کرم مغزی",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "بادام",
      "روغن"
    ],
    "ingredientIds": [
      "ING-132"
    ],
    "tags": [
      "مغزی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-NUT-017",
    "name": "پسته کوهی",
    "aliases": [
      "بنه"
    ],
    "category": "مغزها و دانه ها",
    "subcategory": "مغز",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "پسته کوهی"
    ],
    "ingredientIds": [
      "ING-134"
    ],
    "tags": [
      "مغزی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-NUT-018",
    "name": "بلوط",
    "aliases": [],
    "category": "مغزها و دانه ها",
    "subcategory": "مغز",
    "foodType": "ingredient",
    "visualAsset": "🥜",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "مشت",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "مشت",
        "gramsPerUnit": 30
      },
      {
        "amount": 10,
        "unit": "عدد",
        "gramsPerUnit": 25
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 630,
      "protein": 18,
      "carbs": 16,
      "fat": 58,
      "fiber": 7
    },
    "ingredients": [
      "بلوط"
    ],
    "ingredientIds": [
      "ING-133"
    ],
    "tags": [
      "مغزی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-DRIED-001",
    "name": "کشمش",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "کشمش",
    "foodType": "ingredient",
    "visualAsset": "🍇",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "کشمش"
    ],
    "ingredientIds": [
      "ING-109"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-002",
    "name": "توت خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "توت",
    "foodType": "ingredient",
    "visualAsset": "🍇",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "توت خشک"
    ],
    "ingredientIds": [
      "ING-099"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-003",
    "name": "انجیر خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "انجیر",
    "foodType": "ingredient",
    "visualAsset": "🍇",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "انجیر خشک"
    ],
    "ingredientIds": [
      "ING-135"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-004",
    "name": "خرمای خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "خرما",
    "foodType": "ingredient",
    "visualAsset": "🍇",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "خرما"
    ],
    "ingredientIds": [
      "ING-106"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-005",
    "name": "آلو خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "آلو",
    "foodType": "ingredient",
    "visualAsset": "🍇",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "آلو خشک"
    ],
    "ingredientIds": [
      "ING-136"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-006",
    "name": "زردآلو خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "زردآلو",
    "foodType": "ingredient",
    "visualAsset": "🍇",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "زردآلو خشک"
    ],
    "ingredientIds": [
      "ING-137"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-007",
    "name": "هلو خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "هلو",
    "foodType": "ingredient",
    "visualAsset": "🍇",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "هلو خشک"
    ],
    "ingredientIds": [
      "ING-138"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-008",
    "name": "سیب خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "سیب",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "سیب خشک"
    ],
    "ingredientIds": [
      "ING-139"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-009",
    "name": "انگور خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "انگور",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "انگور خشک"
    ],
    "ingredientIds": [
      "ING-109"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-010",
    "name": "توت سفید خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "توت",
    "foodType": "ingredient",
    "visualAsset": "🍇",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "توت سفید خشک"
    ],
    "ingredientIds": [
      "ING-099"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-011",
    "name": "آلبالو خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "آلبالو",
    "foodType": "ingredient",
    "visualAsset": "🍇",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "آلبالو خشک"
    ],
    "ingredientIds": [
      "ING-140"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-012",
    "name": "گیلاس خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "گیلاس",
    "foodType": "ingredient",
    "visualAsset": "🍇",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "گیلاس خشک"
    ],
    "ingredientIds": [
      "ING-141"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-013",
    "name": "کیوی خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "کیوی",
    "foodType": "ingredient",
    "visualAsset": "🍇",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "کیوی خشک"
    ],
    "ingredientIds": [
      "ING-142"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-014",
    "name": "آناناس خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "آناناس",
    "foodType": "ingredient",
    "visualAsset": "🍞",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "آناناس خشک"
    ],
    "ingredientIds": [
      "ING-143"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-015",
    "name": "انبه خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "انبه",
    "foodType": "ingredient",
    "visualAsset": "🍇",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "انبه خشک"
    ],
    "ingredientIds": [
      "ING-144"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRIED-016",
    "name": "پرتقال خشک",
    "aliases": [],
    "category": "میوه خشک",
    "subcategory": "پرتقال",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "عدد",
      "gramsPerUnit": 15
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "عدد",
        "gramsPerUnit": 15
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 280,
      "protein": 2.5,
      "carbs": 68,
      "fat": 0.5,
      "fiber": 5
    },
    "ingredients": [
      "پرتقال خشک"
    ],
    "ingredientIds": [
      "ING-145"
    ],
    "tags": [
      "میوه خشک",
      "شیرین"
    ]
  },
  {
    "id": "IR-SNACK-001",
    "name": "چیپس سیب زمینی",
    "aliases": [
      "چیپس"
    ],
    "category": "تنقلات",
    "subcategory": "چیپس",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سیب زمینی",
      "روغن",
      "نمک"
    ],
    "ingredientIds": [
      "ING-147"
    ],
    "tags": [
      "تنقلات",
      "شور",
      "فرآورده"
    ]
  },
  {
    "id": "IR-SNACK-002",
    "name": "پفک",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "پفک",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ذرت",
      "روغن",
      "نمک"
    ],
    "ingredientIds": [
      "ING-148"
    ],
    "tags": [
      "تنقلات",
      "شور"
    ]
  },
  {
    "id": "IR-SNACK-003",
    "name": "اسنک",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "اسنک",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ذرت",
      "روغن",
      "ادویه"
    ],
    "ingredientIds": [
      "ING-149"
    ],
    "tags": [
      "تنقلات",
      "شور"
    ]
  },
  {
    "id": "IR-SNACK-004",
    "name": "کراکر",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "کراکر",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "روغن",
      "نمک"
    ],
    "ingredientIds": [
      "ING-150"
    ],
    "tags": [
      "تنقلات",
      "شور"
    ]
  },
  {
    "id": "IR-SNACK-005",
    "name": "بیسکویت ساده",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "بیسکویت",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شکر",
      "روغن"
    ],
    "ingredientIds": [
      "ING-151"
    ],
    "tags": [
      "تنقلات",
      "شیرین"
    ]
  },
  {
    "id": "IR-SNACK-006",
    "name": "بیسکویت کرمدار",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "بیسکویت",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شکر",
      "کرم",
      "روغن"
    ],
    "ingredientIds": [
      "ING-151"
    ],
    "tags": [
      "تنقلات",
      "شیرین"
    ]
  },
  {
    "id": "IR-SNACK-007",
    "name": "ویفر",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "ویفر",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شکر",
      "روغن"
    ],
    "ingredientIds": [
      "ING-152"
    ],
    "tags": [
      "تنقلات",
      "شیرین"
    ]
  },
  {
    "id": "IR-SNACK-008",
    "name": "شکلات تخته ای",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "شکلات",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "کاکائو",
      "شکر",
      "شیر",
      "روغن"
    ],
    "ingredientIds": [
      "ING-153"
    ],
    "tags": [
      "تنقلات",
      "شیرین"
    ]
  },
  {
    "id": "IR-SNACK-009",
    "name": "شکلات صبحانه",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "شکلات",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "کاکائو",
      "شکر",
      "روغن"
    ],
    "ingredientIds": [
      "ING-153"
    ],
    "tags": [
      "تنقلات",
      "شیرین"
    ]
  },
  {
    "id": "IR-SNACK-010",
    "name": "نوتلا",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "شکلات",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "کاکائو",
      "شکر",
      "روغن",
      "فندق"
    ],
    "ingredientIds": [
      "ING-154"
    ],
    "tags": [
      "تنقلات",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SNACK-011",
    "name": "ذرت بوداده",
    "aliases": [
      "پاپ کورن"
    ],
    "category": "تنقلات",
    "subcategory": "ذرت",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ذرت",
      "روغن",
      "نمک"
    ],
    "ingredientIds": [
      "ING-060"
    ],
    "tags": [
      "تنقلات",
      "شور"
    ]
  },
  {
    "id": "IR-SNACK-012",
    "name": "آجیل مخلوط",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "آجیل",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "بادام",
      "پسته",
      "فندق",
      "گردو",
      "نخودچی"
    ],
    "ingredientIds": [
      "ING-155"
    ],
    "tags": [
      "تنقلات",
      "مغزی"
    ]
  },
  {
    "id": "IR-SNACK-013",
    "name": "نخودچی",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "نخودچی",
    "foodType": "ingredient",
    "visualAsset": "🫘",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نخودچی",
      "نمک"
    ],
    "ingredientIds": [
      "ING-025"
    ],
    "tags": [
      "تنقلات",
      "شور"
    ]
  },
  {
    "id": "IR-SNACK-014",
    "name": "تخمه ژاپنی",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "تخمه",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "تخمه ژاپنی",
      "نمک"
    ],
    "ingredientIds": [
      "ING-128"
    ],
    "tags": [
      "تنقلات",
      "شور"
    ]
  },
  {
    "id": "IR-SNACK-015",
    "name": "لواشک",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "لواشک",
    "foodType": "ingredient",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آلو",
      "نمک"
    ],
    "ingredientIds": [
      "ING-156"
    ],
    "tags": [
      "تنقلات",
      "ترش"
    ]
  },
  {
    "id": "IR-SNACK-016",
    "name": "ترشک",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "لواشک",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آلو",
      "نمک"
    ],
    "ingredientIds": [
      "ING-156"
    ],
    "tags": [
      "تنقلات",
      "ترش"
    ]
  },
  {
    "id": "IR-SNACK-017",
    "name": "آلوچه",
    "aliases": [],
    "category": "تنقلات",
    "subcategory": "لواشک",
    "foodType": "ingredient",
    "visualAsset": "🍿",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آلوچه",
      "نمک"
    ],
    "ingredientIds": [
      "ING-156"
    ],
    "tags": [
      "تنقلات",
      "ترش"
    ]
  },
  {
    "id": "IR-DRINK-001",
    "name": "آب",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "آب",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "آب"
    ],
    "ingredientIds": [
      "ING-158"
    ],
    "tags": [
      "نوشیدنی"
    ]
  },
  {
    "id": "IR-DRINK-002",
    "name": "چای",
    "aliases": [
      "چای سیاه"
    ],
    "category": "نوشیدنی ها",
    "subcategory": "چای",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "چای",
      "آب"
    ],
    "ingredientIds": [
      "ING-159"
    ],
    "tags": [
      "نوشیدنی",
      "گرم"
    ]
  },
  {
    "id": "IR-DRINK-003",
    "name": "چای سبز",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "چای",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "چای سبز",
      "آب"
    ],
    "ingredientIds": [
      "ING-159"
    ],
    "tags": [
      "نوشیدنی",
      "گرم",
      "رژیمی"
    ]
  },
  {
    "id": "IR-DRINK-005",
    "name": "دمنوش نعنا",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "دمنوش",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "نعنا",
      "آب"
    ],
    "ingredientIds": [
      "ING-170"
    ],
    "tags": [
      "نوشیدنی",
      "گرم"
    ]
  },
  {
    "id": "IR-DRINK-006",
    "name": "دمنوش بابونه",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "دمنوش",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "بابونه",
      "آب"
    ],
    "ingredientIds": [
      "ING-170"
    ],
    "tags": [
      "نوشیدنی",
      "گرم"
    ]
  },
  {
    "id": "IR-DRINK-007",
    "name": "دمنوش گل گاوزبان",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "دمنوش",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "گل گاوزبان",
      "آب"
    ],
    "ingredientIds": [
      "ING-170"
    ],
    "tags": [
      "نوشیدنی",
      "گرم"
    ]
  },
  {
    "id": "IR-DRINK-008",
    "name": "دمنوش بهارنارنج",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "دمنوش",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "بهارنارنج",
      "آب"
    ],
    "ingredientIds": [
      "ING-170"
    ],
    "tags": [
      "نوشیدنی",
      "گرم"
    ]
  },
  {
    "id": "IR-DRINK-009",
    "name": "دمنوش دارچین",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "دمنوش",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "دارچین",
      "آب"
    ],
    "ingredientIds": [
      "ING-170"
    ],
    "tags": [
      "نوشیدنی",
      "گرم"
    ]
  },
  {
    "id": "IR-DRINK-010",
    "name": "قهوه",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "قهوه",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "قهوه",
      "آب"
    ],
    "ingredientIds": [
      "ING-160"
    ],
    "tags": [
      "نوشیدنی",
      "گرم",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DRINK-011",
    "name": "اسپرسو",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "قهوه",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "قهوه",
      "آب"
    ],
    "ingredientIds": [
      "ING-160"
    ],
    "tags": [
      "نوشیدنی",
      "گرم",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DRINK-012",
    "name": "کاپوچینو",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "قهوه",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "قهوه",
      "شیر",
      "کف شیر"
    ],
    "ingredientIds": [
      "ING-160"
    ],
    "tags": [
      "نوشیدنی",
      "گرم",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DRINK-013",
    "name": "لاته",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "قهوه",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "قهوه",
      "شیر"
    ],
    "ingredientIds": [
      "ING-160"
    ],
    "tags": [
      "نوشیدنی",
      "گرم",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DRINK-014",
    "name": "آمریکانو",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "قهوه",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "قهوه",
      "آب"
    ],
    "ingredientIds": [
      "ING-160"
    ],
    "tags": [
      "نوشیدنی",
      "گرم",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DRINK-015",
    "name": "شیرکاکائو",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "نوشیدنی سرد",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "شیر",
      "کاکائو",
      "شکر"
    ],
    "ingredientIds": [
      "ING-161"
    ],
    "tags": [
      "نوشیدنی",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRINK-016",
    "name": "شیر موز",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "نوشیدنی سرد",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "شیر",
      "موز",
      "شکر"
    ],
    "ingredientIds": [
      "ING-162"
    ],
    "tags": [
      "نوشیدنی",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRINK-017",
    "name": "شیر توت فرنگی",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "نوشیدنی سرد",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "شیر",
      "توت فرنگی",
      "شکر"
    ],
    "ingredientIds": [
      "ING-163"
    ],
    "tags": [
      "نوشیدنی",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRINK-018",
    "name": "آب پرتقال",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "آبمیوه",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "پرتقال"
    ],
    "ingredientIds": [
      "ING-164"
    ],
    "tags": [
      "نوشیدنی",
      "میوه"
    ]
  },
  {
    "id": "IR-DRINK-019",
    "name": "آب سیب",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "آبمیوه",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "سیب"
    ],
    "ingredientIds": [
      "ING-164"
    ],
    "tags": [
      "نوشیدنی",
      "میوه"
    ]
  },
  {
    "id": "IR-DRINK-020",
    "name": "آب هویج",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "آبمیوه",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "هویج"
    ],
    "ingredientIds": [
      "ING-164"
    ],
    "tags": [
      "نوشیدنی",
      "میوه"
    ]
  },
  {
    "id": "IR-DRINK-021",
    "name": "آب انار",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "آبمیوه",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "انار"
    ],
    "ingredientIds": [
      "ING-164"
    ],
    "tags": [
      "نوشیدنی",
      "میوه"
    ]
  },
  {
    "id": "IR-DRINK-022",
    "name": "آب انگور",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "آبمیوه",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "انگور"
    ],
    "ingredientIds": [
      "ING-164"
    ],
    "tags": [
      "نوشیدنی",
      "میوه"
    ]
  },
  {
    "id": "IR-DRINK-023",
    "name": "آب لیمو",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "آبمیوه",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "لیمو",
      "آب"
    ],
    "ingredientIds": [
      "ING-164"
    ],
    "tags": [
      "نوشیدنی",
      "ترش"
    ]
  },
  {
    "id": "IR-DRINK-024",
    "name": "آب آلبالو",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "آبمیوه",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "آلبالو"
    ],
    "ingredientIds": [
      "ING-164"
    ],
    "tags": [
      "نوشیدنی",
      "میوه"
    ]
  },
  {
    "id": "IR-DRINK-025",
    "name": "شربت آلبالو",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "شربت",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "آلبالو",
      "شکر",
      "آب"
    ],
    "ingredientIds": [
      "ING-165"
    ],
    "tags": [
      "نوشیدنی",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRINK-026",
    "name": "شربت سکنجبین",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "شربت",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "سرکه",
      "شکر",
      "نعنا",
      "آب"
    ],
    "ingredientIds": [
      "ING-165"
    ],
    "tags": [
      "نوشیدنی",
      "سنتی"
    ]
  },
  {
    "id": "IR-DRINK-027",
    "name": "شربت بیدمشک",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "شربت",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "بیدمشک",
      "شکر",
      "آب"
    ],
    "ingredientIds": [
      "ING-165"
    ],
    "tags": [
      "نوشیدنی",
      "سنتی"
    ]
  },
  {
    "id": "IR-DRINK-028",
    "name": "شربت بهارنارنج",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "شربت",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "بهارنارنج",
      "شکر",
      "آب"
    ],
    "ingredientIds": [
      "ING-165"
    ],
    "tags": [
      "نوشیدنی",
      "سنتی"
    ]
  },
  {
    "id": "IR-DRINK-029",
    "name": "شربت زعفران",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "شربت",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "زعفران",
      "شکر",
      "آب"
    ],
    "ingredientIds": [
      "ING-165"
    ],
    "tags": [
      "نوشیدنی",
      "سنتی"
    ]
  },
  {
    "id": "IR-DRINK-030",
    "name": "شربت خاکشیر",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "شربت",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "خاکشیر",
      "شکر",
      "آب"
    ],
    "ingredientIds": [
      "ING-165"
    ],
    "tags": [
      "نوشیدنی",
      "سنتی"
    ]
  },
  {
    "id": "IR-DRINK-031",
    "name": "شربت تخم شربتی",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "شربت",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "تخم شربتی",
      "شکر",
      "آب"
    ],
    "ingredientIds": [
      "ING-165"
    ],
    "tags": [
      "نوشیدنی",
      "سنتی"
    ]
  },
  {
    "id": "IR-DRINK-032",
    "name": "لیموناد",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "نوشابه",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "آب",
      "لیمو",
      "شکر"
    ],
    "ingredientIds": [
      "ING-165"
    ],
    "tags": [
      "نوشیدنی",
      "ترش"
    ]
  },
  {
    "id": "IR-DRINK-033",
    "name": "نوشابه",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "نوشابه",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "آب",
      "شکر",
      "گاز"
    ],
    "ingredientIds": [
      "ING-166"
    ],
    "tags": [
      "نوشیدنی",
      "شیرین"
    ]
  },
  {
    "id": "IR-DRINK-034",
    "name": "نوشابه رژیمی",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "نوشابه",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "آب",
      "شکر",
      "گاز"
    ],
    "ingredientIds": [
      "ING-166"
    ],
    "tags": [
      "نوشیدنی",
      "رژیمی"
    ]
  },
  {
    "id": "IR-DRINK-035",
    "name": "ماءالشعیر",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "نوشابه",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "آب",
      "جو",
      "گاز"
    ],
    "ingredientIds": [
      "ING-166"
    ],
    "tags": [
      "نوشیدنی"
    ]
  },
  {
    "id": "IR-DRINK-036",
    "name": "دوغ گازدار",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "دوغ",
    "foodType": "ingredient",
    "visualAsset": "🥛",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "دوغ",
      "گاز",
      "نمک"
    ],
    "ingredientIds": [
      "ING-115"
    ],
    "tags": [
      "نوشیدنی",
      "لبنی"
    ]
  },
  {
    "id": "IR-DRINK-038",
    "name": "آب معدنی",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "آب",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "آب معدنی"
    ],
    "ingredientIds": [
      "ING-158"
    ],
    "tags": [
      "نوشیدنی"
    ]
  },
  {
    "id": "IR-DRINK-039",
    "name": "آب نارگیل",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "آبمیوه",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0.3,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "آب نارگیل"
    ],
    "ingredientIds": [
      "ING-164"
    ],
    "tags": [
      "نوشیدنی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DRINK-040",
    "name": "اسموتی",
    "aliases": [],
    "category": "نوشیدنی ها",
    "subcategory": "اسموتی",
    "foodType": "ingredient",
    "visualAsset": "☕",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "لیوان",
      "gramsPerUnit": 240
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "لیوان",
        "gramsPerUnit": 240
      },
      {
        "amount": 1,
        "unit": "فنجان",
        "gramsPerUnit": 150
      },
      {
        "amount": 100,
        "unit": "میلی‌لیتر",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 45,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0,
      "fiber": 0
    },
    "ingredients": [
      "میوه",
      "شیر",
      "یخ"
    ],
    "ingredientIds": [
      "ING-167"
    ],
    "tags": [
      "نوشیدنی",
      "فرنگی",
      "شیرین"
    ]
  },
  {
    "id": "IR-DESSERT-001",
    "name": "شله زرد",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "دسر سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "برنج",
      "شکر",
      "زعفران",
      "گلاب",
      "دارچین"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-176",
      "ING-180",
      "ING-169",
      "ING-182"
    ],
    "tags": [
      "ایرانی",
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-DESSERT-002",
    "name": "فرنی",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "دسر سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شیر",
      "آرد برنج",
      "شکر",
      "گلاب"
    ],
    "ingredientIds": [
      "ING-110",
      "ING-037",
      "ING-176",
      "ING-169"
    ],
    "tags": [
      "ایرانی",
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-DESSERT-003",
    "name": "حلوا",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "دسر سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "روغن",
      "شکر",
      "زعفران",
      "گلاب"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-174",
      "ING-176",
      "ING-180",
      "ING-169"
    ],
    "tags": [
      "ایرانی",
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-DESSERT-004",
    "name": "حلوا ارده",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "دسر سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ارده",
      "شیره",
      "آرد"
    ],
    "ingredientIds": [
      "ING-127",
      "ING-171",
      "ING-037"
    ],
    "tags": [
      "ایرانی",
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-DESSERT-005",
    "name": "حلوا شکری",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "دسر سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شکر",
      "روغن",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-176",
      "ING-174",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-DESSERT-006",
    "name": "بستنی سنتی",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "بستنی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شیر",
      "خامه",
      "زعفران",
      "گلاب"
    ],
    "ingredientIds": [
      "ING-110",
      "ING-114",
      "ING-180",
      "ING-169"
    ],
    "tags": [
      "ایرانی",
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-DESSERT-007",
    "name": "بستنی وانیلی",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "بستنی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شیر",
      "خامه",
      "وانیل",
      "شکر"
    ],
    "ingredientIds": [
      "ING-110",
      "ING-114",
      "ING-217",
      "ING-176"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DESSERT-008",
    "name": "بستنی شکلاتی",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "بستنی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شیر",
      "خامه",
      "کاکائو",
      "شکر"
    ],
    "ingredientIds": [
      "ING-110",
      "ING-114",
      "ING-213",
      "ING-176"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DESSERT-009",
    "name": "فالوده",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "دسر سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "رشته",
      "شربت",
      "آبلیمو",
      "گلاب"
    ],
    "ingredientIds": [
      "ING-034",
      "ING-165",
      "ING-078",
      "ING-169"
    ],
    "tags": [
      "ایرانی",
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-DESSERT-010",
    "name": "کرم کارامل",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "دسر فرنگی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شیر",
      "تخم مرغ",
      "شکر",
      "کارامل"
    ],
    "ingredientIds": [
      "ING-110",
      "ING-023",
      "ING-176",
      "ING-219"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DESSERT-011",
    "name": "پودینگ",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "دسر فرنگی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شیر",
      "شکر",
      "نشاسته"
    ],
    "ingredientIds": [
      "ING-110",
      "ING-176",
      "ING-218"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DESSERT-012",
    "name": "ژله",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "دسر فرنگی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ژلاتین",
      "شکر",
      "آب",
      "طعم دهنده"
    ],
    "ingredientIds": [
      "ING-214",
      "ING-176",
      "ING-158"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DESSERT-013",
    "name": "موس شکلاتی",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "دسر فرنگی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شکلات",
      "خامه",
      "شکر"
    ],
    "ingredientIds": [
      "ING-153",
      "ING-114",
      "ING-176"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DESSERT-014",
    "name": "تیرامیسو",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "دسر فرنگی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماسکارپونه",
      "قهوه",
      "تخم مرغ",
      "شکر"
    ],
    "ingredientIds": [
      "ING-118",
      "ING-160",
      "ING-023",
      "ING-176"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DESSERT-015",
    "name": "چیزکیک",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "دسر فرنگی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "پنیر خامه ای",
      "شکر",
      "تخم مرغ",
      "بیسکویت"
    ],
    "ingredientIds": [
      "ING-112",
      "ING-176",
      "ING-023",
      "ING-151"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DESSERT-016",
    "name": "کیک شکلاتی",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "کیک",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شکر",
      "کاکائو",
      "تخم مرغ",
      "روغن"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-176",
      "ING-213",
      "ING-023",
      "ING-174"
    ],
    "tags": [
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-DESSERT-017",
    "name": "کیک وانیلی",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "کیک",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شکر",
      "وانیل",
      "تخم مرغ",
      "روغن"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-176",
      "ING-217",
      "ING-023",
      "ING-174"
    ],
    "tags": [
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-DESSERT-018",
    "name": "کیک هویج",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "کیک",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "هویج",
      "شکر",
      "تخم مرغ",
      "روغن"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-042",
      "ING-176",
      "ING-023",
      "ING-174"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DESSERT-019",
    "name": "کیک میوه",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "کیک",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "میوه",
      "شکر",
      "تخم مرغ",
      "روغن"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-176",
      "ING-023",
      "ING-174"
    ],
    "tags": [
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-DESSERT-020",
    "name": "کیک پنیر",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "کیک",
    "foodType": "dessert",
    "visualAsset": "🧀",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "پنیر",
      "شکر",
      "تخم مرغ"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-112",
      "ING-176",
      "ING-023"
    ],
    "tags": [
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-DESSERT-021",
    "name": "شیرینی دانمارکی",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "شیرینی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "کره",
      "شکر",
      "خامه"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-113",
      "ING-176",
      "ING-114"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DESSERT-022",
    "name": "کروسان",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "شیرینی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "کره",
      "شکر"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-113",
      "ING-176"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DESSERT-023",
    "name": "دونات",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "شیرینی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شکر",
      "روغن",
      "شکلات"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-176",
      "ING-174",
      "ING-153"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DESSERT-024",
    "name": "مافین",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "کیک",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شکر",
      "تخم مرغ",
      "روغن"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-176",
      "ING-023",
      "ING-174"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-DESSERT-025",
    "name": "براونی",
    "aliases": [],
    "category": "دسرها",
    "subcategory": "کیک",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شکلات",
      "آرد",
      "شکر",
      "تخم مرغ"
    ],
    "ingredientIds": [
      "ING-153",
      "ING-037",
      "ING-176",
      "ING-023"
    ],
    "tags": [
      "دسر",
      "شیرین",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SWEET-001",
    "name": "گزانگبین",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گزانگبین",
      "شکر",
      "آرد"
    ],
    "ingredientIds": [],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-002",
    "name": "نبات",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شکر",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-176",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-003",
    "name": "شکر پنیر",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🧀",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شکر",
      "گلاب"
    ],
    "ingredientIds": [
      "ING-176",
      "ING-169"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-004",
    "name": "پولکی",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شکر",
      "گلاب",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-176",
      "ING-169",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-005",
    "name": "سوهان",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شکر",
      "زعفران",
      "پسته",
      "روغن"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-176",
      "ING-180",
      "ING-124",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-006",
    "name": "سوهان عسلی",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "عسل",
      "آرد",
      "پسته",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-177",
      "ING-037",
      "ING-124",
      "ING-180"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-007",
    "name": "گز",
    "aliases": [
      "گز اصفهانی"
    ],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شیره",
      "پسته",
      "بادام",
      "گلاب"
    ],
    "ingredientIds": [
      "ING-171",
      "ING-124",
      "ING-121",
      "ING-169"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-009",
    "name": "باقلوا",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "پسته",
      "بادام",
      "شکر",
      "کره"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-124",
      "ING-121",
      "ING-176",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-010",
    "name": "باقلوا تبریزی",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "پسته",
      "بادام",
      "شکر",
      "کره"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-124",
      "ING-121",
      "ING-176",
      "ING-113"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-011",
    "name": "زولبیا",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شکر",
      "زعفران",
      "روغن"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-176",
      "ING-180",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-012",
    "name": "بامیه شیرینی",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شکر",
      "زعفران",
      "روغن"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-176",
      "ING-180",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-013",
    "name": "پشمک",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شکر",
      "گلاب"
    ],
    "ingredientIds": [
      "ING-176",
      "ING-169"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-014",
    "name": "نوقا",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شکر",
      "بادام",
      "پسته",
      "عسل"
    ],
    "ingredientIds": [
      "ING-176",
      "ING-121",
      "ING-124",
      "ING-177"
    ],
    "tags": [
      "شیرینی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SWEET-015",
    "name": "شیرینی نخودچی",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد نخود",
      "شکر",
      "روغن",
      "هل"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-176",
      "ING-174",
      "ING-190"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-016",
    "name": "شیرینی برنجی",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد برنج",
      "شکر",
      "روغن",
      "هل"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-176",
      "ING-174",
      "ING-190"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-017",
    "name": "شیرینی دانمارکی شکلاتی",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "کره",
      "شکلات",
      "شکر"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-113",
      "ING-153",
      "ING-176"
    ],
    "tags": [
      "شیرینی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SWEET-018",
    "name": "شیرینی زبان",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "کره",
      "شکر",
      "خامه"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-113",
      "ING-176",
      "ING-114"
    ],
    "tags": [
      "شیرینی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SWEET-019",
    "name": "شیرینی کشمشی",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی سنتی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "کشمش",
      "شکر",
      "روغن"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-109",
      "ING-176",
      "ING-174"
    ],
    "tags": [
      "ایرانی",
      "شیرینی",
      "سنتی"
    ]
  },
  {
    "id": "IR-SWEET-020",
    "name": "شیرینی نارگیلی",
    "aliases": [],
    "category": "شیرینی ها",
    "subcategory": "شیرینی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نارگیل",
      "شکر",
      "تخم مرغ"
    ],
    "ingredientIds": [
      "ING-098",
      "ING-176",
      "ING-023"
    ],
    "tags": [
      "شیرینی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-FASTFOOD-001",
    "name": "همبرگر",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "برگر",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت چرخ کرده",
      "نان همبرگری",
      "کاهو",
      "گوجه",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-003",
      "ING-038",
      "ING-049",
      "ING-043",
      "ING-194"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-FASTFOOD-002",
    "name": "چیزبرگر",
    "aliases": [
      "چیز برگر"
    ],
    "category": "فست فود",
    "subcategory": "برگر",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت چرخ کرده",
      "نان همبرگری",
      "پنیر",
      "کاهو",
      "گوجه"
    ],
    "ingredientIds": [
      "ING-003",
      "ING-038",
      "ING-112",
      "ING-049",
      "ING-043"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-FASTFOOD-003",
    "name": "دبل برگر",
    "aliases": [
      "دوبل برگر"
    ],
    "category": "فست فود",
    "subcategory": "برگر",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت چرخ کرده",
      "نان همبرگری",
      "پنیر",
      "کاهو",
      "گوجه"
    ],
    "ingredientIds": [
      "ING-003",
      "ING-038",
      "ING-112",
      "ING-049",
      "ING-043"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-FASTFOOD-004",
    "name": "مرغ برگر",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "برگر",
    "foodType": "main_dish",
    "visualAsset": "🍗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "مرغ",
      "نان همبرگری",
      "کاهو",
      "گوجه",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-038",
      "ING-049",
      "ING-043",
      "ING-194"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-FASTFOOD-005",
    "name": "قارچ برگر",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "برگر",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت چرخ کرده",
      "نان همبرگری",
      "قارچ",
      "پنیر"
    ],
    "ingredientIds": [
      "ING-003",
      "ING-038",
      "ING-059",
      "ING-112"
    ],
    "tags": [
      "فست فود",
      "رستورانی"
    ]
  },
  {
    "id": "IR-FASTFOOD-006",
    "name": "پیتزا مخلوط",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "پیتزا",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خمیر پیتزا",
      "پنیر",
      "سوسیس",
      "قارچ",
      "فلفل دلمه"
    ],
    "ingredientIds": [
      "ING-211",
      "ING-112",
      "ING-008",
      "ING-059",
      "ING-047"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-FASTFOOD-007",
    "name": "پیتزا مخصوص",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "پیتزا",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خمیر پیتزا",
      "پنیر",
      "گوشت گوسفندی",
      "مرغ",
      "قارچ",
      "فلفل"
    ],
    "ingredientIds": [
      "ING-211",
      "ING-112",
      "ING-001",
      "ING-016",
      "ING-059",
      "ING-183"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-FASTFOOD-008",
    "name": "پیتزا گوشت",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "پیتزا",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خمیر پیتزا",
      "پنیر",
      "گوشت چرخ کرده",
      "سس گوجه"
    ],
    "ingredientIds": [
      "ING-211",
      "ING-112",
      "ING-003",
      "ING-203"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-FASTFOOD-009",
    "name": "پیتزا مرغ",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "پیتزا",
    "foodType": "main_dish",
    "visualAsset": "🍗",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خمیر پیتزا",
      "پنیر",
      "مرغ",
      "قارچ",
      "سس گوجه"
    ],
    "ingredientIds": [
      "ING-211",
      "ING-112",
      "ING-016",
      "ING-059",
      "ING-203"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-FASTFOOD-010",
    "name": "پیتزا سبزیجات",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "پیتزا",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خمیر پیتزا",
      "پنیر",
      "فلفل دلمه",
      "قارچ",
      "زیتون",
      "گوجه"
    ],
    "ingredientIds": [
      "ING-211",
      "ING-112",
      "ING-047",
      "ING-059",
      "ING-067",
      "ING-043"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "فرنگی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FASTFOOD-011",
    "name": "پیتزا آمریکایی",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "پیتزا",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خمیر پیتزا",
      "پنیر",
      "سوسیس",
      "قارچ",
      "فلفل"
    ],
    "ingredientIds": [
      "ING-211",
      "ING-112",
      "ING-008",
      "ING-059",
      "ING-183"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-FASTFOOD-012",
    "name": "پیتزا ایتالیایی",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "پیتزا",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خمیر پیتزا",
      "پنیر",
      "گوجه",
      "ریحان",
      "زیتون"
    ],
    "ingredientIds": [
      "ING-211",
      "ING-112",
      "ING-043",
      "ING-056",
      "ING-067"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-FASTFOOD-013",
    "name": "پیتزا پپرونی",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "پیتزا",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خمیر پیتزا",
      "پنیر",
      "پپرونی",
      "سس گوجه"
    ],
    "ingredientIds": [
      "ING-211",
      "ING-112",
      "ING-012",
      "ING-203"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-FASTFOOD-014",
    "name": "پیتزا مارگاریتا",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "پیتزا",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خمیر پیتزا",
      "پنیر",
      "گوجه",
      "ریحان"
    ],
    "ingredientIds": [
      "ING-211",
      "ING-112",
      "ING-043",
      "ING-056"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-FASTFOOD-015",
    "name": "پیتزا سی بست",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "پیتزا",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خمیر پیتزا",
      "پنیر",
      "میگو",
      "سس گوجه"
    ],
    "ingredientIds": [
      "ING-211",
      "ING-112",
      "ING-019",
      "ING-203"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-FASTFOOD-016",
    "name": "پیتزا رست بیف",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "پیتزا",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خمیر پیتزا",
      "پنیر",
      "گوشت رست بیف",
      "سس گوجه"
    ],
    "ingredientIds": [
      "ING-211",
      "ING-112",
      "ING-013",
      "ING-203"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "فرنگی"
    ]
  },
  {
    "id": "IR-FASTFOOD-017",
    "name": "ساندویچ مرغ",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "ساندویچ",
    "foodType": "main_dish",
    "visualAsset": "🍗",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان باگت",
      "مرغ",
      "کاهو",
      "گوجه",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-016",
      "ING-049",
      "ING-043",
      "ING-194"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-FASTFOOD-018",
    "name": "ساندویچ ژامبون",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "ساندویچ",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان باگت",
      "ژامبون",
      "پنیر",
      "کاهو",
      "گوجه"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-010",
      "ING-112",
      "ING-049",
      "ING-043"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-FASTFOOD-019",
    "name": "ساندویچ سوسیس",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "ساندویچ",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان باگت",
      "سوسیس",
      "کاهو",
      "گوجه",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-008",
      "ING-049",
      "ING-043",
      "ING-194"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-FASTFOOD-020",
    "name": "ساندویچ کالباس",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "ساندویچ",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان باگت",
      "کالباس",
      "کاهو",
      "گوجه",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-009",
      "ING-049",
      "ING-043",
      "ING-194"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-FASTFOOD-021",
    "name": "ساندویچ فلافل",
    "aliases": [
      "فلافل ساندویچ"
    ],
    "category": "فست فود",
    "subcategory": "ساندویچ",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان",
      "فلافل",
      "کاهو",
      "گوجه",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-220",
      "ING-049",
      "ING-043",
      "ING-194"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FASTFOOD-022",
    "name": "ساندویچ شنیسل",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "ساندویچ",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان باگت",
      "شنیسل مرغ",
      "کاهو",
      "گوجه",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-015",
      "ING-049",
      "ING-043",
      "ING-194"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-FASTFOOD-023",
    "name": "شاورما",
    "aliases": [
      "شاورما مرغ"
    ],
    "category": "فست فود",
    "subcategory": "ساندویچ",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان",
      "مرغ",
      "سیر",
      "سس مایونز",
      "خیارشور"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-016",
      "ING-041",
      "ING-194",
      "ING-044"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-FASTFOOD-024",
    "name": "دنر",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "ساندویچ",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان",
      "گوشت گوسفندی",
      "کاهو",
      "گوجه",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-001",
      "ING-049",
      "ING-043",
      "ING-194"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-FASTFOOD-025",
    "name": "هات داگ",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "ساندویچ",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان",
      "سوسیس",
      "سس مایونز",
      "خیارشور"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-008",
      "ING-194",
      "ING-044"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-FASTFOOD-026",
    "name": "فلافل",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "فلافل",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نخود",
      "پیاز",
      "سیر",
      "سبزی",
      "روغن"
    ],
    "ingredientIds": [
      "ING-025",
      "ING-040",
      "ING-041",
      "ING-058",
      "ING-174"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-FASTFOOD-027",
    "name": "سیب زمینی سرخ کرده",
    "aliases": [
      "سیب زمینی سوخاری"
    ],
    "category": "فست فود",
    "subcategory": "سرخ کردنی",
    "foodType": "side_dish",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سیب زمینی",
      "روغن",
      "نمک"
    ],
    "ingredientIds": [
      "ING-039",
      "ING-174",
      "ING-175"
    ],
    "tags": [
      "فست فود",
      "رستورانی"
    ]
  },
  {
    "id": "IR-FASTFOOD-028",
    "name": "پیاز حلقه ای",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "سرخ کردنی",
    "foodType": "side_dish",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "پیاز",
      "آرد",
      "روغن"
    ],
    "ingredientIds": [
      "ING-040",
      "ING-037",
      "ING-174"
    ],
    "tags": [
      "فست فود",
      "رستورانی"
    ]
  },
  {
    "id": "IR-FASTFOOD-029",
    "name": "بال سوخاری",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "مرغ سوخاری",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "بال مرغ",
      "آرد",
      "ادویه",
      "روغن"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-037",
      "ING-188",
      "ING-174"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-FASTFOOD-030",
    "name": "ناگت سوخاری",
    "aliases": [],
    "category": "فست فود",
    "subcategory": "مرغ سوخاری",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ناگت مرغ",
      "آرد",
      "روغن"
    ],
    "ingredientIds": [
      "ING-014",
      "ING-037",
      "ING-174"
    ],
    "tags": [
      "فست فود",
      "رستورانی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-INTL-001",
    "name": "ماکارونی با سس گوشت",
    "aliases": [
      "ماکارونی",
      "ماکارونی فرمی"
    ],
    "category": "غذاهای بین المللی",
    "subcategory": "ماکارونی",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماکارونی",
      "گوشت چرخ کرده",
      "سس گوجه",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-035",
      "ING-003",
      "ING-203",
      "ING-040"
    ],
    "tags": [
      "فرنگی",
      "ماکارونی"
    ]
  },
  {
    "id": "IR-INTL-002",
    "name": "اسپاگتی بولونز",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "ماکارونی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "اسپاگتی",
      "گوشت چرخ کرده",
      "سس گوجه",
      "ریحان"
    ],
    "ingredientIds": [
      "ING-035",
      "ING-003",
      "ING-203",
      "ING-056"
    ],
    "tags": [
      "فرنگی",
      "ماکارونی"
    ]
  },
  {
    "id": "IR-INTL-003",
    "name": "اسپاگتی کاربونارا",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "ماکارونی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "اسپاگتی",
      "تخم مرغ",
      "پنیر",
      "بیکن"
    ],
    "ingredientIds": [
      "ING-035",
      "ING-023",
      "ING-112",
      "ING-011"
    ],
    "tags": [
      "فرنگی",
      "ماکارونی"
    ]
  },
  {
    "id": "IR-INTL-004",
    "name": "لازانیا",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "ماکارونی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "لازانیا",
      "گوشت چرخ کرده",
      "پنیر",
      "سس گوجه"
    ],
    "ingredientIds": [
      "ING-035",
      "ING-003",
      "ING-112",
      "ING-203"
    ],
    "tags": [
      "فرنگی",
      "ماکارونی"
    ]
  },
  {
    "id": "IR-INTL-005",
    "name": "فتوچینی آلفردو",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "ماکارونی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "فتوچینی",
      "خامه",
      "پنیر",
      "سیر"
    ],
    "ingredientIds": [
      "ING-035",
      "ING-114",
      "ING-112",
      "ING-041"
    ],
    "tags": [
      "فرنگی",
      "ماکارونی"
    ]
  },
  {
    "id": "IR-INTL-006",
    "name": "پنه آربیتا",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "ماکارونی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "پنه",
      "سس گوجه",
      "فلفل",
      "سیر"
    ],
    "ingredientIds": [
      "ING-035",
      "ING-203",
      "ING-183",
      "ING-041"
    ],
    "tags": [
      "فرنگی",
      "ماکارونی"
    ]
  },
  {
    "id": "IR-INTL-007",
    "name": "ریزوتو",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "برنج فرنگی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "برنج",
      "قارچ",
      "پنیر",
      "کره"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-059",
      "ING-112",
      "ING-113"
    ],
    "tags": [
      "فرنگی",
      "برنجی"
    ]
  },
  {
    "id": "IR-INTL-008",
    "name": "پائیا",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "برنج فرنگی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "برنج",
      "میگو",
      "مرغ",
      "زعفران"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-019",
      "ING-016",
      "ING-180"
    ],
    "tags": [
      "فرنگی",
      "برنجی",
      "دریایی"
    ]
  },
  {
    "id": "IR-INTL-009",
    "name": "سوشی",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "ژاپنی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "برنج",
      "ماهی",
      "جلبک",
      "سرکه"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-018",
      "ING-022",
      "ING-178"
    ],
    "tags": [
      "فرنگی",
      "دریایی"
    ]
  },
  {
    "id": "IR-INTL-010",
    "name": "رامن",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "ژاپنی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "رشته",
      "آب مرغ",
      "تخم مرغ",
      "سبزیجات"
    ],
    "ingredientIds": [
      "ING-034",
      "ING-119",
      "ING-023",
      "ING-047"
    ],
    "tags": [
      "فرنگی",
      "نودی"
    ]
  },
  {
    "id": "IR-INTL-011",
    "name": "نودل سوخاری",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "چینی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نودل",
      "سبزیجات",
      "سس سویا"
    ],
    "ingredientIds": [
      "ING-035",
      "ING-047",
      "ING-202"
    ],
    "tags": [
      "فرنگی",
      "نودی"
    ]
  },
  {
    "id": "IR-INTL-012",
    "name": "مرغ کنتاکی",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "آمریکایی",
    "foodType": "main_dish",
    "visualAsset": "🍗",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "مرغ",
      "آرد",
      "ادویه",
      "روغن"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-037",
      "ING-188",
      "ING-174"
    ],
    "tags": [
      "فرنگی",
      "فست فود",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-INTL-013",
    "name": "استیک پپر",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "غربی",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت گوسفندی",
      "فلفل",
      "کره",
      "سیر"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-183",
      "ING-113",
      "ING-041"
    ],
    "tags": [
      "فرنگی",
      "پروتئینی",
      "رستورانی"
    ]
  },
  {
    "id": "IR-INTL-014",
    "name": "فیله مرغ گریل",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "غربی",
    "foodType": "main_dish",
    "visualAsset": "🍗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "فیله مرغ",
      "زعفران",
      "لیمو",
      "کره"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-180",
      "ING-078",
      "ING-113"
    ],
    "tags": [
      "فرنگی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-INTL-015",
    "name": "سالاد سزار",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "سالاد",
    "foodType": "side_dish",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "کاهو",
      "مرغ",
      "پنیر",
      "سس سزار",
      "نان تست"
    ],
    "ingredientIds": [
      "ING-049",
      "ING-016",
      "ING-112",
      "ING-198",
      "ING-038"
    ],
    "tags": [
      "فرنگی",
      "سالاد"
    ]
  },
  {
    "id": "IR-INTL-016",
    "name": "سالاد یونانی",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "سالاد",
    "foodType": "side_dish",
    "visualAsset": "🍞",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "کف دست",
      "gramsPerUnit": 30
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کف دست",
        "gramsPerUnit": 30
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 50
      }
    ],
    "nutritionPer100g": {
      "calories": 265,
      "protein": 8.5,
      "carbs": 53,
      "fat": 1.5,
      "fiber": 3
    },
    "ingredients": [
      "خیار",
      "گوجه",
      "زیتون",
      "پنیر فتا",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-044",
      "ING-043",
      "ING-067",
      "ING-112",
      "ING-040"
    ],
    "tags": [
      "فرنگی",
      "سالاد",
      "گیاهی"
    ]
  },
  {
    "id": "IR-INTL-017",
    "name": "سالاد فصل",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "سالاد",
    "foodType": "side_dish",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "کاهو",
      "خیار",
      "گوجه",
      "هویج",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-049",
      "ING-044",
      "ING-043",
      "ING-042",
      "ING-078"
    ],
    "tags": [
      "فرنگی",
      "سالاد",
      "گیاهی"
    ]
  },
  {
    "id": "IR-INTL-018",
    "name": "سالاد الویه",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "سالاد",
    "foodType": "side_dish",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سیب زمینی",
      "تخم مرغ",
      "خیارشور",
      "مرغ",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-039",
      "ING-023",
      "ING-044",
      "ING-016",
      "ING-194"
    ],
    "tags": [
      "فرنگی",
      "سالاد"
    ]
  },
  {
    "id": "IR-INTL-019",
    "name": "سالاد ماکارونی",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "سالاد",
    "foodType": "side_dish",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماکارونی",
      "مایونز",
      "خیارشور",
      "ذرت"
    ],
    "ingredientIds": [
      "ING-035",
      "ING-194",
      "ING-044",
      "ING-060"
    ],
    "tags": [
      "فرنگی",
      "سالاد"
    ]
  },
  {
    "id": "IR-INTL-020",
    "name": "سالاد کلم",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "سالاد",
    "foodType": "side_dish",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "کلم",
      "هویج",
      "مایونز"
    ],
    "ingredientIds": [
      "ING-048",
      "ING-042",
      "ING-194"
    ],
    "tags": [
      "فرنگی",
      "سالاد"
    ]
  },
  {
    "id": "IR-INTL-021",
    "name": "سوپ پیاز",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "سوپ",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 75,
      "protein": 3.5,
      "carbs": 10,
      "fat": 2,
      "fiber": 2.8
    },
    "ingredients": [
      "پیاز",
      "آب مرغ",
      "پنیر",
      "نان"
    ],
    "ingredientIds": [
      "ING-040",
      "ING-119",
      "ING-112",
      "ING-038"
    ],
    "tags": [
      "فرنگی",
      "سوپ"
    ]
  },
  {
    "id": "IR-INTL-022",
    "name": "سوپ کدو حلوایی",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "سوپ",
    "foodType": "main_dish",
    "visualAsset": "🥣",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کاسه",
      "gramsPerUnit": 250
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کاسه",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "ملاقه",
        "gramsPerUnit": 100
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 75,
      "protein": 3.5,
      "carbs": 10,
      "fat": 2,
      "fiber": 2.8
    },
    "ingredients": [
      "کدو حلوایی",
      "خامه",
      "پیاز"
    ],
    "ingredientIds": [
      "ING-046",
      "ING-114",
      "ING-040"
    ],
    "tags": [
      "فرنگی",
      "سوپ"
    ]
  },
  {
    "id": "IR-INTL-023",
    "name": "کباب ترکی",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "ترکی",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "گوشت گوسفندی",
      "نان",
      "سبزیجات",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-038",
      "ING-047",
      "ING-194"
    ],
    "tags": [
      "فرنگی",
      "پروتئینی",
      "رستورانی"
    ]
  },
  {
    "id": "IR-INTL-026",
    "name": "هوموس",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "عربی",
    "foodType": "side_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نخود",
      "ارده",
      "لیمو",
      "سیر"
    ],
    "ingredientIds": [
      "ING-025",
      "ING-127",
      "ING-078",
      "ING-041"
    ],
    "tags": [
      "فرنگی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-INTL-027",
    "name": "تبوله",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "عربی",
    "foodType": "side_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "بلغور",
      "جعفری",
      "گوجه",
      "نعنا",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-032",
      "ING-052",
      "ING-043",
      "ING-078"
    ],
    "tags": [
      "فرنگی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-INTL-028",
    "name": "کباب ترکی مرغ",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "ترکی",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 175,
      "protein": 24,
      "carbs": 1,
      "fat": 8,
      "fiber": 0
    },
    "ingredients": [
      "مرغ",
      "نان",
      "سبزیجات",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-038",
      "ING-047",
      "ING-194"
    ],
    "tags": [
      "فرنگی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-INTL-029",
    "name": "چیکن کری",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "هندی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "مرغ",
      "کاری",
      "پیاز",
      "گوجه",
      "خامه"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-189",
      "ING-040",
      "ING-043",
      "ING-114"
    ],
    "tags": [
      "فرنگی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-INTL-030",
    "name": "بریانی",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "هندی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "برنج",
      "گوشت گوسفندی",
      "ادویه",
      "ماست"
    ],
    "ingredientIds": [
      "ING-031",
      "ING-001",
      "ING-188",
      "ING-111"
    ],
    "tags": [
      "فرنگی",
      "برنجی"
    ]
  },
  {
    "id": "IR-INTL-031",
    "name": "کباب هندی",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "هندی",
    "foodType": "main_dish",
    "visualAsset": "🍢",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "مرغ",
      "ماست",
      "ادویه",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-016",
      "ING-111",
      "ING-188",
      "ING-078"
    ],
    "tags": [
      "فرنگی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-INTL-032",
    "name": "پد تای",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "تایلندی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نودل",
      "میگو",
      "بادام زمینی",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-035",
      "ING-019",
      "ING-123",
      "ING-078"
    ],
    "tags": [
      "فرنگی",
      "نودی"
    ]
  },
  {
    "id": "IR-INTL-033",
    "name": "بهارات",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "هندی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت گوسفندی",
      "ادویه",
      "پیاز",
      "گوجه"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-188",
      "ING-040",
      "ING-043"
    ],
    "tags": [
      "فرنگی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-INTL-034",
    "name": "تاکو",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "مکزیکی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان تاکو",
      "گوشت گوسفندی",
      "پنیر",
      "کاهو",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-001",
      "ING-112",
      "ING-049",
      "ING-194"
    ],
    "tags": [
      "فرنگی",
      "فست فود"
    ]
  },
  {
    "id": "IR-INTL-035",
    "name": "بوریتو",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "مکزیکی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان",
      "گوشت گوسفندی",
      "برنج",
      "لوبیا",
      "پنیر"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-001",
      "ING-031",
      "ING-024",
      "ING-112"
    ],
    "tags": [
      "فرنگی",
      "فست فود"
    ]
  },
  {
    "id": "IR-INTL-036",
    "name": "کاسادیا",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "مکزیکی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان",
      "پنیر",
      "مرغ",
      "فلفل"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-112",
      "ING-016",
      "ING-183"
    ],
    "tags": [
      "فرنگی",
      "فست فود"
    ]
  },
  {
    "id": "IR-INTL-037",
    "name": "ناچو",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "مکزیکی",
    "foodType": "side_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "چیپس ذرت",
      "پنیر",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-157",
      "ING-112",
      "ING-194"
    ],
    "tags": [
      "فرنگی",
      "فست فود"
    ]
  },
  {
    "id": "IR-INTL-038",
    "name": "گواکاموله",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "مکزیکی",
    "foodType": "side_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آووکادو",
      "گوجه",
      "پیاز",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-108",
      "ING-043",
      "ING-040",
      "ING-078"
    ],
    "tags": [
      "فرنگی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-INTL-039",
    "name": "سالسا",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "مکزیکی",
    "foodType": "side_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوجه",
      "پیاز",
      "فلفل",
      "گشنیز"
    ],
    "ingredientIds": [
      "ING-043",
      "ING-040",
      "ING-183",
      "ING-054"
    ],
    "tags": [
      "فرنگی",
      "گیاهی"
    ]
  },
  {
    "id": "IR-INTL-040",
    "name": "کرپ",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "فرانسوی",
    "foodType": "dessert",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شیر",
      "تخم مرغ",
      "شکر"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-110",
      "ING-023",
      "ING-176"
    ],
    "tags": [
      "فرنگی",
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-INTL-041",
    "name": "وافل",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "فرانسوی",
    "foodType": "dessert",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شیر",
      "تخم مرغ",
      "شکر"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-110",
      "ING-023",
      "ING-176"
    ],
    "tags": [
      "فرنگی",
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-INTL-042",
    "name": "پنکیک",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "آمریکایی",
    "foodType": "dessert",
    "visualAsset": "🍰",
    "visualPriority": "B",
    "visualType": "dedicated",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "شیر",
      "تخم مرغ",
      "شکر"
    ],
    "ingredientIds": [
      "ING-037",
      "ING-110",
      "ING-023",
      "ING-176"
    ],
    "tags": [
      "فرنگی",
      "دسر",
      "شیرین"
    ]
  },
  {
    "id": "IR-INTL-043",
    "name": "فرنچ تست",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "آمریکایی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان تست",
      "تخم مرغ",
      "شیر",
      "شکر"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-023",
      "ING-110",
      "ING-176"
    ],
    "tags": [
      "فرنگی",
      "صبحانه",
      "شیرین"
    ]
  },
  {
    "id": "IR-INTL-044",
    "name": "املت فرانسوی",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "فرانسوی",
    "foodType": "main_dish",
    "visualAsset": "🍳",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "تخم مرغ",
      "کره",
      "پنیر",
      "سبزیجات"
    ],
    "ingredientIds": [
      "ING-023",
      "ING-113",
      "ING-112",
      "ING-047"
    ],
    "tags": [
      "فرنگی",
      "صبحانه",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-INTL-045",
    "name": "بندیکت",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "آمریکایی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "تخم مرغ",
      "نان",
      "سس هولندیز",
      "ژامبون"
    ],
    "ingredientIds": [
      "ING-023",
      "ING-038",
      "ING-207",
      "ING-010"
    ],
    "tags": [
      "فرنگی",
      "صبحانه",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-INTL-046",
    "name": "چیز استیک",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "آمریکایی",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوشت گوسفندی",
      "پنیر",
      "پیاز",
      "نان"
    ],
    "ingredientIds": [
      "ING-001",
      "ING-112",
      "ING-040",
      "ING-038"
    ],
    "tags": [
      "فرنگی",
      "پروتئینی",
      "رستورانی"
    ]
  },
  {
    "id": "IR-INTL-047",
    "name": "کلاب ساندویچ",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "آمریکایی",
    "foodType": "main_dish",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان تست",
      "مرغ",
      "بیکن",
      "کاهو",
      "گوجه"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-016",
      "ING-011",
      "ING-049",
      "ING-043"
    ],
    "tags": [
      "فرنگی",
      "ساندویچ",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-INTL-048",
    "name": "بلتا",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "آمریکایی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان",
      "بیکن",
      "کاهو",
      "گوجه",
      "سس مایونز"
    ],
    "ingredientIds": [
      "ING-038",
      "ING-011",
      "ING-049",
      "ING-043",
      "ING-194"
    ],
    "tags": [
      "فرنگی",
      "ساندویچ"
    ]
  },
  {
    "id": "IR-INTL-049",
    "name": "فیش اند چیپس",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "انگلیسی",
    "foodType": "main_dish",
    "visualAsset": "🍝",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ماهی",
      "سیب زمینی",
      "آرد",
      "روغن"
    ],
    "ingredientIds": [
      "ING-018",
      "ING-039",
      "ING-037",
      "ING-174"
    ],
    "tags": [
      "فرنگی",
      "دریایی"
    ]
  },
  {
    "id": "IR-INTL-050",
    "name": "پای گوشت",
    "aliases": [],
    "category": "غذاهای بین المللی",
    "subcategory": "انگلیسی",
    "foodType": "main_dish",
    "visualAsset": "🥩",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خمیر",
      "گوشت گوسفندی",
      "پیاز",
      "ادویه"
    ],
    "ingredientIds": [
      "ING-211",
      "ING-001",
      "ING-040",
      "ING-188"
    ],
    "tags": [
      "فرنگی",
      "پروتئینی"
    ]
  },
  {
    "id": "IR-SAUCE-001",
    "name": "سس مایونز",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس سرد",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "روغن",
      "تخم مرغ",
      "سرکه",
      "خردل"
    ],
    "ingredientIds": [
      "ING-174",
      "ING-023",
      "ING-178",
      "ING-192"
    ],
    "tags": [
      "چاشنی",
      "سس"
    ]
  },
  {
    "id": "IR-SAUCE-002",
    "name": "سس کچاپ",
    "aliases": [
      "کچاپ"
    ],
    "category": "سس و چاشنی",
    "subcategory": "سس سرد",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوجه",
      "شکر",
      "سرکه",
      "ادویه"
    ],
    "ingredientIds": [
      "ING-043",
      "ING-176",
      "ING-178",
      "ING-188"
    ],
    "tags": [
      "چاشنی",
      "سس"
    ]
  },
  {
    "id": "IR-SAUCE-003",
    "name": "سس خردل",
    "aliases": [
      "خردل"
    ],
    "category": "سس و چاشنی",
    "subcategory": "سس سرد",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خردل",
      "سرکه",
      "زردچوبه"
    ],
    "ingredientIds": [
      "ING-192",
      "ING-178",
      "ING-181"
    ],
    "tags": [
      "چاشنی",
      "سس"
    ]
  },
  {
    "id": "IR-SAUCE-004",
    "name": "سس هزار جزیره",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس سرد",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "مایونز",
      "کچاپ",
      "خیارشور"
    ],
    "ingredientIds": [
      "ING-194",
      "ING-195",
      "ING-044"
    ],
    "tags": [
      "چاشنی",
      "سس"
    ]
  },
  {
    "id": "IR-SAUCE-005",
    "name": "سس سزار",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس سرد",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "مایونز",
      "ماهی آنچوی",
      "پنیر",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-194",
      "ING-021",
      "ING-112",
      "ING-078"
    ],
    "tags": [
      "چاشنی",
      "سس",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SAUCE-006",
    "name": "سس رنچ",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس سرد",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "مایونز",
      "دوغ",
      "سبزی",
      "سیر"
    ],
    "ingredientIds": [
      "ING-194",
      "ING-115",
      "ING-058",
      "ING-041"
    ],
    "tags": [
      "چاشنی",
      "سس",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SAUCE-007",
    "name": "سس تارتار",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس سرد",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "مایونز",
      "خیارشور",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-194",
      "ING-044",
      "ING-078"
    ],
    "tags": [
      "چاشنی",
      "سس",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SAUCE-008",
    "name": "سس باربیکیو",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس گرم",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "کچاپ",
      "شکر",
      "سرکه",
      "دود"
    ],
    "ingredientIds": [
      "ING-195",
      "ING-176",
      "ING-178",
      "ING-193"
    ],
    "tags": [
      "چاشنی",
      "سس",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SAUCE-009",
    "name": "سس سویا",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس گرم",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سویا",
      "نمک",
      "آب"
    ],
    "ingredientIds": [
      "ING-030",
      "ING-175",
      "ING-158"
    ],
    "tags": [
      "چاشنی",
      "سس",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SAUCE-010",
    "name": "سس گوجه",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس گرم",
    "foodType": "condiment",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوجه",
      "پیاز",
      "سیر",
      "ریحان"
    ],
    "ingredientIds": [
      "ING-043",
      "ING-040",
      "ING-041",
      "ING-056"
    ],
    "tags": [
      "چاشنی",
      "سس"
    ]
  },
  {
    "id": "IR-SAUCE-011",
    "name": "سس آلفردو",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس گرم",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خامه",
      "کره",
      "پنیر",
      "سیر"
    ],
    "ingredientIds": [
      "ING-114",
      "ING-113",
      "ING-112",
      "ING-041"
    ],
    "tags": [
      "چاشنی",
      "سس",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SAUCE-012",
    "name": "سس بشامل",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس گرم",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شیر",
      "آرد",
      "کره"
    ],
    "ingredientIds": [
      "ING-110",
      "ING-037",
      "ING-113"
    ],
    "tags": [
      "چاشنی",
      "سس",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SAUCE-013",
    "name": "سس پستو",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس گرم",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ریحان",
      "سیر",
      "پنیر",
      "روغن زیتون"
    ],
    "ingredientIds": [
      "ING-056",
      "ING-041",
      "ING-112",
      "ING-174"
    ],
    "tags": [
      "چاشنی",
      "سس",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SAUCE-014",
    "name": "سس هولندیز",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس گرم",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "کره",
      "زرده تخم مرغ",
      "لیمو"
    ],
    "ingredientIds": [
      "ING-113",
      "ING-023",
      "ING-078"
    ],
    "tags": [
      "چاشنی",
      "سس",
      "فرنگی"
    ]
  },
  {
    "id": "IR-SAUCE-015",
    "name": "سس سرکه سیب",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس",
    "foodType": "condiment",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سرکه سیب",
      "آب"
    ],
    "ingredientIds": [
      "ING-178",
      "ING-158"
    ],
    "tags": [
      "چاشنی",
      "سس",
      "رژیمی"
    ]
  },
  {
    "id": "IR-SAUCE-016",
    "name": "سس انار",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سس",
    "foodType": "condiment",
    "visualAsset": "🍎",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "رب انار",
      "شکر",
      "آب"
    ],
    "ingredientIds": [
      "ING-210",
      "ING-176",
      "ING-158"
    ],
    "tags": [
      "چاشنی",
      "سس",
      "ایرانی"
    ]
  },
  {
    "id": "IR-SAUCE-017",
    "name": "رب گوجه",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "رب",
    "foodType": "condiment",
    "visualAsset": "🥗",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گوجه",
      "نمک"
    ],
    "ingredientIds": [
      "ING-043",
      "ING-175"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-018",
    "name": "رب انار",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "رب",
    "foodType": "condiment",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "انار",
      "نمک"
    ],
    "ingredientIds": [
      "ING-092",
      "ING-175"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-019",
    "name": "سرکه",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "سرکه",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سرکه"
    ],
    "ingredientIds": [
      "ING-178"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-020",
    "name": "آبلیمو",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "چاشنی",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "لیمو",
      "آب"
    ],
    "ingredientIds": [
      "ING-078",
      "ING-158"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-021",
    "name": "لیمو عمانی",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "چاشنی",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "لیمو عمانی"
    ],
    "ingredientIds": [
      "ING-179"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-022",
    "name": "زعفران",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "چاشنی",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "زعفران"
    ],
    "ingredientIds": [
      "ING-180"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-023",
    "name": "زردچوبه",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "چاشنی",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "زردچوبه"
    ],
    "ingredientIds": [
      "ING-181"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-024",
    "name": "دارچین",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "چاشنی",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "دارچین"
    ],
    "ingredientIds": [
      "ING-182"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-025",
    "name": "فلفل سیاه",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "چاشنی",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "فلفل سیاه"
    ],
    "ingredientIds": [
      "ING-183"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-026",
    "name": "فلفل قرمز",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "چاشنی",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "فلفل قرمز"
    ],
    "ingredientIds": [
      "ING-183"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-027",
    "name": "سماق",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "چاشنی",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سماق"
    ],
    "ingredientIds": [
      "ING-184"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-028",
    "name": "آویشن",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "چاشنی",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آویشن"
    ],
    "ingredientIds": [
      "ING-185"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-029",
    "name": "پودر سیر",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "چاشنی",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سیر خشک"
    ],
    "ingredientIds": [
      "ING-186"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-030",
    "name": "پودر پیاز",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "چاشنی",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "پیاز خشک"
    ],
    "ingredientIds": [
      "ING-187"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-031",
    "name": "ادویه پلویی",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "ادویه",
    "foodType": "condiment",
    "visualAsset": "🍚",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "کفگیر",
      "gramsPerUnit": 60
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "کفگیر",
        "gramsPerUnit": 60
      },
      {
        "amount": 1,
        "unit": "بشقاب",
        "gramsPerUnit": 250
      },
      {
        "amount": 1,
        "unit": "قاشق",
        "gramsPerUnit": 20
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 150,
      "protein": 3.5,
      "carbs": 30,
      "fat": 2,
      "fiber": 1
    },
    "ingredients": [
      "زردچوبه",
      "دارچین",
      "هل",
      "زنجبیل"
    ],
    "ingredientIds": [
      "ING-181",
      "ING-182",
      "ING-190",
      "ING-191"
    ],
    "tags": [
      "چاشنی",
      "ادویه"
    ]
  },
  {
    "id": "IR-SAUCE-032",
    "name": "ادویه کباب",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "ادویه",
    "foodType": "condiment",
    "visualAsset": "🍢",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "سیخ",
      "gramsPerUnit": 120
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "سیخ",
        "gramsPerUnit": 120
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 35
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 230,
      "protein": 19,
      "carbs": 1,
      "fat": 16,
      "fiber": 0
    },
    "ingredients": [
      "زردچوبه",
      "فلفل",
      "نمک",
      "سماق"
    ],
    "ingredientIds": [
      "ING-181",
      "ING-183",
      "ING-175",
      "ING-184"
    ],
    "tags": [
      "چاشنی",
      "ادویه"
    ]
  },
  {
    "id": "IR-SAUCE-033",
    "name": "ادویه مرغ",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "ادویه",
    "foodType": "condiment",
    "visualAsset": "🍗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "زردچوبه",
      "زعفران",
      "لیمو",
      "فلفل"
    ],
    "ingredientIds": [
      "ING-181",
      "ING-180",
      "ING-078",
      "ING-183"
    ],
    "tags": [
      "چاشنی",
      "ادویه"
    ]
  },
  {
    "id": "IR-SAUCE-034",
    "name": "هل",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "چاشنی",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "هل"
    ],
    "ingredientIds": [
      "ING-190"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-SAUCE-035",
    "name": "زنجبیل",
    "aliases": [],
    "category": "سس و چاشنی",
    "subcategory": "چاشنی",
    "foodType": "condiment",
    "visualAsset": "🧂",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "زنجبیل"
    ],
    "ingredientIds": [
      "ING-191"
    ],
    "tags": [
      "چاشنی",
      "پایه"
    ]
  },
  {
    "id": "IR-BASIC-001",
    "name": "روغن مایع",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "روغن",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "روغن مایع"
    ],
    "ingredientIds": [
      "ING-174"
    ],
    "tags": [
      "پایه",
      "روغن"
    ]
  },
  {
    "id": "IR-BASIC-002",
    "name": "روغن زیتون",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "روغن",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "روغن زیتون"
    ],
    "ingredientIds": [
      "ING-174"
    ],
    "tags": [
      "پایه",
      "روغن",
      "رژیمی"
    ]
  },
  {
    "id": "IR-BASIC-003",
    "name": "روغن کنجد",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "روغن",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "روغن کنجد"
    ],
    "ingredientIds": [
      "ING-174"
    ],
    "tags": [
      "پایه",
      "روغن"
    ]
  },
  {
    "id": "IR-BASIC-004",
    "name": "روغن حیوانی",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "روغن",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "روغن حیوانی"
    ],
    "ingredientIds": [
      "ING-174"
    ],
    "tags": [
      "پایه",
      "روغن",
      "سنتی"
    ]
  },
  {
    "id": "IR-BASIC-005",
    "name": "روغن نارگیل",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "روغن",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "روغن نارگیل"
    ],
    "ingredientIds": [
      "ING-174"
    ],
    "tags": [
      "پایه",
      "روغن"
    ]
  },
  {
    "id": "IR-BASIC-006",
    "name": "کره گیاهی",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "کره",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "روغن گیاهی",
      "آب",
      "نمک"
    ],
    "ingredientIds": [
      "ING-113"
    ],
    "tags": [
      "پایه"
    ]
  },
  {
    "id": "IR-BASIC-007",
    "name": "نمک",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "چاشنی",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نمک"
    ],
    "ingredientIds": [
      "ING-175"
    ],
    "tags": [
      "پایه",
      "چاشنی"
    ]
  },
  {
    "id": "IR-BASIC-008",
    "name": "شکر",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "شیرین کننده",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شکر"
    ],
    "ingredientIds": [
      "ING-176"
    ],
    "tags": [
      "پایه",
      "شیرین"
    ]
  },
  {
    "id": "IR-BASIC-009",
    "name": "عسل",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "شیرین کننده",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "عسل"
    ],
    "ingredientIds": [
      "ING-177"
    ],
    "tags": [
      "پایه",
      "شیرین",
      "طبیعی"
    ]
  },
  {
    "id": "IR-BASIC-010",
    "name": "شیره انگور",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "شیرین کننده",
    "foodType": "ingredient",
    "visualAsset": "🍎",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شیره انگور"
    ],
    "ingredientIds": [
      "ING-171"
    ],
    "tags": [
      "پایه",
      "شیرین",
      "سنتی"
    ]
  },
  {
    "id": "IR-BASIC-011",
    "name": "شیره خرما",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "شیرین کننده",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "شیره خرما"
    ],
    "ingredientIds": [
      "ING-171"
    ],
    "tags": [
      "پایه",
      "شیرین",
      "سنتی"
    ]
  },
  {
    "id": "IR-BASIC-012",
    "name": "مربا آلبالو",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "مربا",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آلبالو",
      "شکر"
    ],
    "ingredientIds": [
      "ING-172"
    ],
    "tags": [
      "پایه",
      "شیرین",
      "صبحانه"
    ]
  },
  {
    "id": "IR-BASIC-013",
    "name": "مربا توت فرنگی",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "مربا",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "توت فرنگی",
      "شکر"
    ],
    "ingredientIds": [
      "ING-172"
    ],
    "tags": [
      "پایه",
      "شیرین",
      "صبحانه"
    ]
  },
  {
    "id": "IR-BASIC-014",
    "name": "مربا هویج",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "مربا",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "هویج",
      "شکر",
      "هل"
    ],
    "ingredientIds": [
      "ING-172"
    ],
    "tags": [
      "پایه",
      "شیرین",
      "صبحانه"
    ]
  },
  {
    "id": "IR-BASIC-015",
    "name": "مربا بالنگ",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "مربا",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "بالنگ",
      "شکر"
    ],
    "ingredientIds": [
      "ING-172"
    ],
    "tags": [
      "پایه",
      "شیرین",
      "سنتی"
    ]
  },
  {
    "id": "IR-BASIC-016",
    "name": "مربا گل محمدی",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "مربا",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گل محمدی",
      "شکر"
    ],
    "ingredientIds": [
      "ING-172"
    ],
    "tags": [
      "پایه",
      "شیرین",
      "سنتی"
    ]
  },
  {
    "id": "IR-BASIC-017",
    "name": "ترشی خیار",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "ترشی",
    "foodType": "ingredient",
    "visualAsset": "🥗",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خیار",
      "سرکه",
      "نمک"
    ],
    "ingredientIds": [
      "ING-173"
    ],
    "tags": [
      "پایه",
      "ترشی"
    ]
  },
  {
    "id": "IR-BASIC-018",
    "name": "ترشی مخلوط",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "ترشی",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "A",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سبزیجات",
      "سرکه",
      "نمک"
    ],
    "ingredientIds": [
      "ING-173"
    ],
    "tags": [
      "پایه",
      "ترشی"
    ]
  },
  {
    "id": "IR-BASIC-019",
    "name": "ترشی سیر",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "ترشی",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سیر",
      "سرکه",
      "نمک"
    ],
    "ingredientIds": [
      "ING-173"
    ],
    "tags": [
      "پایه",
      "ترشی"
    ]
  },
  {
    "id": "IR-BASIC-020",
    "name": "ترشی بادمجان",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "ترشی",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "بادمجان",
      "سرکه",
      "نمک",
      "سبزی"
    ],
    "ingredientIds": [
      "ING-173"
    ],
    "tags": [
      "پایه",
      "ترشی"
    ]
  },
  {
    "id": "IR-BASIC-021",
    "name": "ترشی لیته",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "ترشی",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "C",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "سبزیجات",
      "سرکه",
      "نمک"
    ],
    "ingredientIds": [
      "ING-173"
    ],
    "tags": [
      "پایه",
      "ترشی"
    ]
  },
  {
    "id": "IR-BASIC-022",
    "name": "خمیر پیتزا",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "خمیر",
    "foodType": "ingredient",
    "visualAsset": "🍔",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "آب",
      "خمیرمایه",
      "نمک"
    ],
    "ingredientIds": [
      "ING-211"
    ],
    "tags": [
      "پایه"
    ]
  },
  {
    "id": "IR-BASIC-023",
    "name": "خمیر یوفکا",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "خمیر",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "آب",
      "روغن"
    ],
    "ingredientIds": [
      "ING-211"
    ],
    "tags": [
      "پایه",
      "فرنگی"
    ]
  },
  {
    "id": "IR-BASIC-024",
    "name": "خمیر هزارلا",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "خمیر",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "آرد",
      "کره",
      "آب"
    ],
    "ingredientIds": [
      "ING-211"
    ],
    "tags": [
      "پایه",
      "فرنگی"
    ]
  },
  {
    "id": "IR-BASIC-025",
    "name": "پودر سوخاری",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "پودر",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "نان خشک"
    ],
    "ingredientIds": [
      "ING-212"
    ],
    "tags": [
      "پایه"
    ]
  },
  {
    "id": "IR-BASIC-026",
    "name": "کاکائو",
    "aliases": [
      "پودر کاکائو"
    ],
    "category": "مواد غذایی پایه",
    "subcategory": "پودر",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "کاکائو"
    ],
    "ingredientIds": [
      "ING-213"
    ],
    "tags": [
      "پایه",
      "شیرین"
    ]
  },
  {
    "id": "IR-BASIC-027",
    "name": "ژلاتین",
    "aliases": [
      "پودر ژلاتین"
    ],
    "category": "مواد غذایی پایه",
    "subcategory": "پودر",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "ژلاتین"
    ],
    "ingredientIds": [
      "ING-214"
    ],
    "tags": [
      "پایه"
    ]
  },
  {
    "id": "IR-BASIC-028",
    "name": "خمیرمایه",
    "aliases": [
      "پودر خمیرمایه"
    ],
    "category": "مواد غذایی پایه",
    "subcategory": "پودر",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "خمیرمایه"
    ],
    "ingredientIds": [
      "ING-215"
    ],
    "tags": [
      "پایه"
    ]
  },
  {
    "id": "IR-BASIC-029",
    "name": "بیکینگ پودر",
    "aliases": [
      "پودر بیکینگ"
    ],
    "category": "مواد غذایی پایه",
    "subcategory": "پودر",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "بیکینگ پودر"
    ],
    "ingredientIds": [
      "ING-216"
    ],
    "tags": [
      "پایه"
    ]
  },
  {
    "id": "IR-BASIC-030",
    "name": "گلاب",
    "aliases": [],
    "category": "مواد غذایی پایه",
    "subcategory": "طعم دهنده",
    "foodType": "ingredient",
    "visualAsset": "🍽",
    "visualPriority": "B",
    "visualType": "generic",
    "defaultPortion": {
      "amount": 1,
      "unit": "پرس",
      "gramsPerUnit": 200
    },
    "availablePortions": [
      {
        "amount": 1,
        "unit": "پرس",
        "gramsPerUnit": 200
      },
      {
        "amount": 1,
        "unit": "تکه",
        "gramsPerUnit": 80
      },
      {
        "amount": 100,
        "unit": "گرم",
        "gramsPerUnit": 1
      }
    ],
    "nutritionPer100g": {
      "calories": 190,
      "protein": 11,
      "carbs": 16,
      "fat": 9,
      "fiber": 2
    },
    "ingredients": [
      "گل محمدی",
      "آب"
    ],
    "ingredientIds": [
      "ING-169"
    ],
    "tags": [
      "پایه",
      "سنتی",
      "طعم دهنده"
    ]
  }
];
