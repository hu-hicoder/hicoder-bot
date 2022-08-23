"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const discord_js_1 = require("discord.js");
const rest_1 = require("@discordjs/rest");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const commands = [
    new discord_js_1.SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!'),
    new discord_js_1.SlashCommandBuilder()
        .setName('server')
        .setDescription('Replies with server info!'),
    new discord_js_1.SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with user info!')
].map((command) => command.toJSON());
const rest = new rest_1.REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
rest
    .put(discord_js_1.Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
