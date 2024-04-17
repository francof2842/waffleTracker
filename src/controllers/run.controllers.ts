import { Request, Response } from "express";
import * as cache from "memory-cache";
import { AppDataSource } from "../data-source";
import { Run } from "../entity/Runs.entity";

export class RunController {
  static async getAllRuns(req: Request, res: Response) {
    const data = cache.get("data");
    if (data) {
      console.log("serving from cache");
      return res.status(200).json({
        data,
      });
    } else {
      console.log("serving from db");
      const runRepository = AppDataSource.getRepository(Run);
      const runs = await runRepository.find();
      cache.put("data", runs, 10000);
      return res.status(200).json({
        data: runs,
      });
    }
  }
  static async createRun(req: Request, res: Response) {
    const { seedNumber, playTime, pokemonName, pokemonID, type1, type2,nickname, level, hp, attack, defense, spAtk, spDef, speed, bst, ability, moves1, moves2, moves3, moves4, shedinjaEncounters, endRunLocation, beatBrock, beatMisty, beatSurge, beatErika, beatKoga, beatSabrina,beatBlaine,beatGiovanni,beatLorelai,beatBruno,beatAgatha,beatLance,beatChamp,enemyPokemonID,enemyPokemon,lastEnemyMove,labPokemon,pivotRun,runEndCause,runEndTrainer,gameName,gameSettings } =
      req.body;
    const run = new Run();
    run.seedNumber = seedNumber;
    run.playTime = playTime;
    run.pokemonName = pokemonName;
    run.pokemonID = pokemonID;
    run.type1 = type1;
    run.type2 = type2;
    run.nickname = nickname;
    run.level = level;
    run.hp = hp;
    run.attack = attack;
    run.defense = defense;
    run.spAtk = spAtk;
    run.spDef = spDef;
    run.speed = speed;
    run.bst = bst;
    run.ability = ability;
    run.moves1 = moves1;
    run.moves2 = moves2;
    run.moves3 = moves3;
    run.moves4 = moves4;
    run.shedinjaEncounters = shedinjaEncounters;
    run.endRunLocation = endRunLocation;
    run.beatBrock = beatBrock;
    run.beatMisty = beatMisty;
    run.beatSurge = beatSurge;
    run.beatErika = beatErika;
    run.beatKoga = beatKoga;
    run.beatSabrina = beatSabrina;
    run.beatBlaine = beatBlaine;
    run.beatGiovanni = beatGiovanni;
    run.beatLorelai = beatLorelai;
    run.beatBruno = beatBruno;
    run.beatAgatha = beatAgatha;
    run.beatLance = beatLance;
    run.beatChamp = beatChamp;
    run.enemyPokemonID = enemyPokemonID;
    run.enemyPokemon = enemyPokemon;
    run.lastEnemyMove = lastEnemyMove;
    run.labPokemon = labPokemon;
    run.pivotRun = pivotRun;
    run.runEndCause = runEndCause;
    run.runEndTrainer = runEndTrainer;
    run.gameName = gameName;
    run.gameSettings = gameSettings;
    const runRepository = AppDataSource.getRepository(Run);
    await runRepository.save(run);
    return res
      .status(200)
      .json({ message: "Run created successfully", run });
  }

  static async deleteRun(req: Request, res: Response) {
    const { id } = req.params;
    const runRepository = AppDataSource.getRepository(Run);
    const run = await runRepository.findOne({
      where: { id },
    });
    await runRepository.remove(run);
    return res
      .status(200)
      .json({ message: "Run deleted successfully", run });
  }
}