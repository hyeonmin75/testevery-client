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
import { studyStyleTest } from './study-style';
import { careerTest } from './career';
import { healingStyleTest } from './healing-style';
import { fairytaleTest } from './fairytale';
import { petTest } from './pet';
import { friendshipTest } from './friendship';
import { tappingEnduranceTest } from './tapping-endurance';
import { intuitionTest } from './intuition-test';
import { mbtiTest } from './mbti';



export const tests: Record<string, TestData> = {
  mbti: mbtiTest,
  tapping_endurance: tappingEnduranceTest,
  intuition_test: intuitionTest,
  animal: animalTest,
  love: loveTest,
  travel: travelTest,
  color: colorTest,
  food: foodTest,
  game_character: gameCharacterTest,
  season: seasonTest,
  disney: disneyTest,
  food_personality: foodPersonalityTest,
  reaction_speed: reactionSpeedTest,
  study_style: studyStyleTest,
  career: careerTest,
  healing_style: healingStyleTest,
  fairytale: fairytaleTest,
  pet: petTest,
  friendship: friendshipTest
};

export default tests;