import { TestData } from '../../types/test';
import { animalTest } from './animal';
import { loveTest } from './love';
import { travelTest } from './travel';
import { colorTest } from './color';
import { foodTest } from './food';
import { seasonTest } from './season';
import { disneyTest } from './disney';
import { foodPersonalityTest } from './food-personality';

export const tests: Record<string, TestData> = {
  animal: animalTest,
  love: loveTest,
  travel: travelTest,
  color: colorTest,
  food: foodTest,
  season: seasonTest,
  disney: disneyTest,
  food_personality: foodPersonalityTest
};

export default tests;