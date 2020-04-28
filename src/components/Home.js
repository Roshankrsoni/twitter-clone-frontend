import React from "react";
import styled from "styled-components";
import FeedList from "./FeedList";
import NewTweet from "./NewTweet";
import Header from "./Header";

const Wrapper = styled.div`
`;

const Home = () => {
	return (
		<Wrapper>
			<Header text="Home" />
			<NewTweet />
			<FeedList />
		</Wrapper>
	);
};

export default Home;