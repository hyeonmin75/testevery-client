import { TestData } from '../../types/test';
import { animalTest } from './animal';
import { loveTest } from './love';
import { travelTest } from './travel';
import { colorTest } from './color';
import { foodTest } from './food';
import { gameCharacterTest } from './game-character';
import { seasonTest } from './season';
import { disneyTest } from './disney';
import { foodPersonalityTest } from './food-personality';
import { reactionSpeedTest } from './reaction_speed';

export const tests: Record<string, TestData> = {
  animal: animalTest,
  love: loveTest,
  travel: travelTest,
  color: colorTest,
  food: foodTest,
  game_character: gameCharacterTest,
  season: seasonTest,
  disney: disneyTest,
  food_personality: foodPersonalityTest,
  reaction_speed: reactionSpeedTest
};

export default tests;