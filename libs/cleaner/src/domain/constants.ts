import { CleanerCommands } from "@app/common";
import {
  CreateCleanerCommand,
  CreateJobCommand,
  ReservCleanerCommand,
} from "./command";

export const CleanerCommandMap = {
  [CleanerCommands.CREATE_CLEANER]: CreateCleanerCommand,
  [CleanerCommands.RESERV_CLEANERS]: ReservCleanerCommand,
  [CleanerCommands.INVITE_CLEANER]: CreateJobCommand,
};
