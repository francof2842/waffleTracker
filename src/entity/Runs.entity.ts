import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity({ name: "runs" })
  export class Run {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ nullable: false })
    seedNumber: number;
  
    @Column({ nullable: false })
    playTime: string;
  
    @Column({ nullable: false })
    pokemonName: string;
  
    @Column({ nullable: false })
    pokemonID: number;
  
    @Column({ nullable: false })
    type1: string;
  
    @Column({ nullable: true })
    type2: string;
  
    @Column({ nullable: false })
    nickname: string;

    @Column({ nullable: false })
    level: number;

    @Column({ nullable: false })
    hp: number;

    @Column({ nullable: false })
    attack: number;

    @Column({ nullable: false })
    defense: number;

    @Column({ nullable: false })
    spAtk: number;

    @Column({ nullable: false })
    spDef: number;

    @Column({ nullable: false })
    speed: number;

    @Column({ nullable: false })
    bst: number;

    @Column({ nullable: false })
    ability: string;

    @Column({ nullable: false })
    moves1: string;

    @Column({ nullable: false })
    moves2: string;

    @Column({ nullable: false })
    moves3: string;

    @Column({ nullable: false })
    moves4: string;

    @Column({ nullable: false })
    shedinjaEncounters: number;

    @Column({ nullable: false })
    endRunLocation: string;

    @Column({ nullable: false })
    beatBrock: boolean;

    @Column({ nullable: false })
    beatMisty: boolean;

    @Column({ nullable: false })
    beatSurge: boolean;

    @Column({ nullable: false })
    beatErika: boolean;

    @Column({ nullable: false })
    beatKoga: boolean;

    @Column({ nullable: false })
    beatSabrina: boolean;

    @Column({ nullable: false })
    beatBlaine: boolean;

    @Column({ nullable: false })
    beatGiovanni: boolean;

    @Column({ nullable: false })
    beatLorelai: boolean;

    @Column({ nullable: false })
    beatBruno: boolean;

    @Column({ nullable: false })
    beatAgatha: boolean;

    @Column({ nullable: false })
    beatLance: boolean;

    @Column({ nullable: false })
    beatChamp: boolean;

    @Column({ nullable: false })
    enemyPokemonID: number;

    @Column({ nullable: false })
    enemyPokemon: string;

    @Column({ nullable: false })
    lastEnemyMove: string;

    @Column({ nullable: false })
    labPokemon: string;

    @Column({ nullable: false })
    pivotRun: boolean;

    @Column({ nullable: false })
    runEndCause: string;

    @Column({ nullable: false })
    runEndTrainer: string;

    @Column({ nullable: false })
    gameName: string;

    @Column({ nullable: false })
    gameSettings: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }