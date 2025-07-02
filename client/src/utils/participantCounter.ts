// 참여자 수 증가 시뮬레이션
export function getUpdatedParticipantCount(baseCount: number, testId: string): number {
  // 각 테스트별로 고유한 시드 생성 (테스트 ID 기반)
  const testSeed = testId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // 현재 시간을 기반으로 한 시드 (분 단위로 변화)
  const timeSeed = Math.floor(Date.now() / (1000 * 60)); // 1분마다 변화
  
  // 고유한 시드 조합
  const combinedSeed = testSeed + timeSeed;
  
  // 의사 랜덤 생성기 (시드 기반)
  const random = Math.sin(combinedSeed) * 10000;
  const normalizedRandom = random - Math.floor(random);
  
  // 증가량 계산 (기본 참여자 수의 0.1% ~ 2% 범위)
  const minIncrease = Math.floor(baseCount * 0.001); // 0.1%
  const maxIncrease = Math.floor(baseCount * 0.02);  // 2%
  
  const increase = Math.floor(normalizedRandom * (maxIncrease - minIncrease + 1)) + minIncrease;
  
  return baseCount + increase;
}

// 로컬스토리지에서 이전 참여자 수를 가져오고 업데이트
export function getAndUpdateParticipantCount(testId: string, originalCount: number): number {
  const storageKey = `participant_count_${testId}`;
  const lastUpdate = localStorage.getItem(`${storageKey}_timestamp`);
  const currentTime = Date.now();
  
  // 5분마다 참여자 수 업데이트
  const UPDATE_INTERVAL = 5 * 60 * 1000; // 5분
  
  let storedCount = localStorage.getItem(storageKey);
  
  if (!storedCount || !lastUpdate || (currentTime - parseInt(lastUpdate)) > UPDATE_INTERVAL) {
    // 새로운 참여자 수 계산
    const baseCount = storedCount ? parseInt(storedCount) : originalCount;
    const newCount = getUpdatedParticipantCount(baseCount, testId);
    
    // 저장
    localStorage.setItem(storageKey, newCount.toString());
    localStorage.setItem(`${storageKey}_timestamp`, currentTime.toString());
    
    return newCount;
  }
  
  return parseInt(storedCount);
}