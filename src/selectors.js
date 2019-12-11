import { createSelector } from "reselect";
import Skill from "./Skill";

const getClusterIndex = data => {
  return data["tinfo"];
};

const makeGetRange = clusterId =>
  createSelector(
    getClusterIndex,
    clusterIndex => {
      const items = clusterIndex["Category"];
      const key = "Topic" + clusterId;
      return [items.indexOf(key), items.lastIndexOf(key)];
    }
  );

export const makeGetSkillList = clusterId => {
  const getRange = makeGetRange(clusterId);
  return createSelector(
    getClusterIndex,
    getRange,
    (clusterIndex, range) => {
      if (!clusterId) return [];
      const [indexFrom, indexTo] = range;
      const results = [];
      for (let i = indexFrom; i <= indexTo; i++) {
        results.push(
          new Skill({
            term: clusterIndex["Terms"][i],
            freq: clusterIndex["Freq"][i]
          })
        );
      }
      return results.sort((a, b) => {
        return b.freq - a.freq;
      });
    }
  );
};
