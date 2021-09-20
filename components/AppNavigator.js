import React,{Component} from 'react';
import {  createSwitchNavigator} from 'react-navigation';
import Feedback from '../settingsOptions/Feedback';
import Help from '../settingsOptions/Help';
import TermsOfUse from '../settingsOptions/TermsOfUse';

import Credits from '../settingsOptions/Credits'

export const AppNavigator = createSwitchNavigator({

FeedbackScreen:Feedback,
HelpScreen:Help,
TermsOfUseScreen :TermsOfUse,
CreditsScreen :Credits

})