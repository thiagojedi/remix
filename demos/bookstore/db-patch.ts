/**
 * @module
 *
 * This module patches node:sqlite's DatabaseSync to behave
 * closer to better-sqlite3. Mainly, it adds the "reader"
 * property to Statement so it can indicate the presence of
 * data being returned
 */

import { DatabaseSync, type StatementSync } from 'node:sqlite'

class PatchedDatabase extends DatabaseSync {
  override prepare(sql: string): StatementSync {
    const statement = super.prepare(sql)
    //@ts-expect-error Setting this to satisfy adapter
    statement.reader = statement.columns().length > 0
    return statement
  }
}

export default PatchedDatabase
