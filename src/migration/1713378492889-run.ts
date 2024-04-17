import { MigrationInterface, QueryRunner } from "typeorm";

export class Run1713378492889 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        ` 
            --Table Definition
            CREATE TABLE "runs"  (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "seedNumber" integer NOT NULL,
                "playTime" character varying NOT NULL,
                "pokemonName" character varying NOT NULL,
                "pokemonID" integer NOT NULL,
                "type1" character varying NOT NULL,
                "type2" character varying,
                "nickname" character varying NOT NULL,
                "level" integer NOT NULL,
                "hp" integer NOT NULL,
                "attack" integer NOT NULL,
                "defense" integer NOT NULL,
                "spAtk" integer NOT NULL,
                "spDef" integer NOT NULL,
                "speed" integer NOT NULL,
                "bst" integer NOT NULL,
                "ability" character varying NOT NULL,
                "moves1" character varying NOT NULL,
                "moves2" character varying NOT NULL,
                "moves3" character varying NOT NULL,
                "moves4" character varying NOT NULL,
                "shedinjaEncounters" integer NOT NULL,
                "endRunLocation" character varying NOT NULL,
                "beatBrock" boolean NOT NULL,
                "beatMisty" boolean NOT NULL,
                "beatLtSurge" boolean NOT NULL,
                "beatErika" boolean NOT NULL,
                "beatKoga" boolean NOT NULL,
                "beatSabrina" boolean NOT NULL,
                "beatBlaine" boolean NOT NULL,
                "beatGiovanni" boolean NOT NULL,
                "beatLorelei" boolean NOT NULL,
                "beatBruno" boolean NOT NULL,
                "beatAgatha" boolean NOT NULL,
                "beatLance" boolean NOT NULL,
                "beatChamp" boolean NOT NULL,
                "enemyPokemonID" integer NOT NULL,
                "enemyPokemon" character varying NOT NULL,
                "lastEnemyMove" character varying NOT NULL,
                "labPokemon" character varying NOT NULL,
                "pivotRun" boolean NOT NULL,
                "runEndCause" character varying NOT NULL,
                "runEndTrainer" character varying NOT NULL,
                "gameName" character varying NOT NULL,
                "gameSettings" character varying NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")
            )
  
            
            
            
            
            `
      ),
        undefined;
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TABLE "users"`, undefined);
    }
  }
