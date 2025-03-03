import { Card, Skeleton, Stack } from '@chakra-ui/react'
import { SkeletonText } from '../ui/skeleton'

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Stack>
        <Skeleton height='200px'>
          </Skeleton>
        <SkeletonText />
      </Stack>
    </Card.Root>
  )
}

export default GameCardSkeleton