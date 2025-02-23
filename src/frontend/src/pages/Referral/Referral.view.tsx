import * as PropTypes from 'prop-types'
import * as React from 'react'
import { PrivateUser } from 'shared/user/PrivateUser';
import { Link } from 'react-router-dom';
import { Button } from 'app/App.components/Button/Button.controller';
//prettier-ignore
import { ReferralPage, ReferralContainer, ReferralLeftContent, ReferralRow, Creature, CreatureWrapper, ReferralCard, ReferralCardsRow, ButtonsRow } from './Referral.style'
import { activePink, textColor } from 'styles';

type ReferralViewProps = {
    authUser?: PrivateUser
}

export const ReferralView = ({authUser}: ReferralViewProps) => {
    return (
        <ReferralPage>
            <ReferralContainer>
                <ReferralRow>
                    <ReferralLeftContent>
                    <h1 style={{color: activePink}}>Earn to Learn with your friends</h1>
                    <h2 style={{color: textColor, fontSize: "26px", fontWeight: "bold"}}>Get 15 USD by completing Ocean101 and referring Ocean Academy to your friends.</h2>
                    <ReferralCardsRow>
                        <ReferralCard>
                            <p>1. Unlock your personal invitation link by graduating from Ocean 101</p>
                        </ReferralCard>
                        <ReferralCard>
                            <p>2. Verify that you are a person with BrightID</p>
                        </ReferralCard>
                        <ReferralCard>
                            <p>3. Get your friends to complete Ocean 101</p>
                        </ReferralCard>
                    </ReferralCardsRow>
                    <p style={{fontSize: "18px"}}>
                    If you don't yet have a BrightID verified-profile, head to <a style={{color: "cyan"}}href={"https://github.com/oceanprotocol/oceandao/wiki/BrightID-Verification-Guide"} target={"_blank"}>OceanDAO</a> and follow the process to get verified. This verification also multiplies by 4 your voting weight in OceanDAO.
                    </p>
                    <p style={{fontSize: "18px"}}>
                    Reward claims are checked and processed automatically via smart contracts on the Polygon L2 chain (make sure to adjust the network in your Metamask).
                    </p>
                    <ButtonsRow>
                    {authUser ? 
                    <>
                    <Link to={`/user/${authUser.username}`} style={{width: "200px"}}>
                    <Button text="Copy invitation" color="primary" />
                    </Link>
                    <Link to={`/user/${authUser.username}`} style={{width: "200px"}}>
                    <Button text="Claim reward" color="primary" />
                    </Link>  
                    </>
                    :
                    <Link to="/ocean101/chapter-1" style={{width: "200px"}}>
                    <Button text="Start Ocean 101" color="primary" />
                    </Link>
                    }

                    </ButtonsRow>
                    </ReferralLeftContent>
                    <CreatureWrapper>
                     <Creature src="/creatures/whale-full-compressed.svg" width="400px" /> 
                    </CreatureWrapper>
                </ReferralRow>
            </ReferralContainer>
        </ReferralPage>
    )
}

ReferralView.propTypes = {
    loading: PropTypes.bool,
}

ReferralView.defaultProps = {
    loading: false,
}