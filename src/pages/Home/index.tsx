
import { Cover } from './Cover/index.tsx'
import { Store } from './Store/index.tsx'
import { HomeContainer } from './styles.ts'

export function Home() {
    return (
        <HomeContainer>
            <Cover />
            <Store />
        </HomeContainer>
    )
}