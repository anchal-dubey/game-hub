import useGame, { Game } from "../hooks/useGame";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";


interface Props {
    gameQuery: GameQuery
}

function GameGrid({ gameQuery }: Props) {
    const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGame(gameQuery);
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8]

    return <Box padding="10px">
        {error && <Text color="red">{error.message}</Text>}
        <SimpleGrid
            columns={{ sm: 1, xl: 4, lg: 3, md: 2 }}
            spacing={3}
            
        >
            {isLoading && skeleton.map((skeleton) => <GameCardContainer key={skeleton}>
                <GameCardSkleton />
            </GameCardContainer>)}
            {data?.pages.map((page, index) => (
                <React.Fragment key={index}>
                    {page.results.map((game) => (
                        <GameCardContainer key={game.id}>
                            <GameCard game={game} />
                        </GameCardContainer>

                    ))}
                </React.Fragment>
            ))}
        </SimpleGrid>

        <Button disabled={!hasNextPage} onClick={() =>fetchNextPage()} marginY={5}>{isFetchingNextPage?'Loading...':'Load More'}</Button>
    </Box>



};

export default GameGrid;

