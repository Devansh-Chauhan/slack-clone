import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from '../components/ChatInput'
import ChatMessage from '../components/ChatMessage'


function Chat() {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # clever
                    </ChannelName>
                    <ChannelInfo>
                        company-wide announcements and work-based matters
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info/>
                </ChannelDetails>
            </Header>
            <MessageContainer>
                <ChatMessage/>
            </MessageContainer>
                <ChatInput/>
        </Container>

    )
}

export default Chat;

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
`
const Header = styled.div`
    background: #892cdc;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83, .13);
    
`
const MessageContainer = styled.div`
    
`
const Channel = styled.div`
    
`
const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #FFFFFF;
`
const ChannelName = styled.div`
    font-weight: 700;
`
const ChannelInfo = styled.div`
    font-weight: 400;
    color: #FFFFFF;
    font-size: 13px;
    margin-top: 8px;
`
const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`