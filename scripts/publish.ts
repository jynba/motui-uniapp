import { execSync } from 'node:child_process'
import { consola } from 'consola'
import { version } from '../package.json'

execSync('pnpm build:all', { stdio: 'inherit' })

// 需要先确认版本有无更新
const command = 'cd packages/motui && npm publish'

execSync(command, { stdio: 'inherit' })

consola.success(`Published npm package version ${version}`)
