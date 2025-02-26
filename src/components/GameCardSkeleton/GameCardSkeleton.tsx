import { Card, Skeleton, Stack } from '@chakra-ui/react'
import { SkeletonText } from '../ui/skeleton'

const GameCardSkeleton = () => {
  return (
    <Card.Root width='300px'>
      <Stack>
        <Skeleton height='200px'>
          </Skeleton>
        <SkeletonText />
      </Stack>
    </Card.Root>
  )
}

export default GameCardSkeleton