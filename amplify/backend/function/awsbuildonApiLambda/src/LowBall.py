import re

def LowBall(text, original):
    result = re.findall("\$[0-9.]+", text)
    if (len(result) == 0):
        return "No Offer Detected"

    CUT_OFF = 0.6
    numLowBall = 0
    original = float(original)
    for price in result:
        price = float(re.sub("\$", "", price))
        if(price < original * CUT_OFF):
            numLowBall += 1

    if(len(result) == 1):
        return "Legitimate Offer Made" if (numLowBall == 0) else "Lowball Offer Made"
    elif(len(result) == 2):
        return "Lowball Offer Made" if (numLowBall == 2) else "Legitimate Offer Made"
    else:
        if (numLowBall > len(result) * 0.5):
            return "Lowball Offer Made"
        elif (numLowBall <= len(result) * 0.34):
            return "Legitimate Offer Made"
        else:
            return "Uncertain"


def CustomisedLowBall(text, original, cut_off):
    result = re.findall("\$[0-9.]+", text)
    if (len(result) == 0):
        return "No Offer Detected"

    numLowBall = 0
    original = float(original)
    cut_off = float(cut_off)
    for price in result:
        price = float(re.sub("\$", "", price))
        if(price < original * cut_off):
            numLowBall += 1

    if(len(result) == 1):
        return "Legitimate Offer Made" if (numLowBall == 0) else "Lowball Offer Made"
    elif(len(result) == 2):
        return "Lowball Offer Made" if (numLowBall == 2) else "Legitimate Offer Made"
    else:
        if (numLowBall > len(result) * 0.5):
            return "Lowball Offer Made"
        elif (numLowBall <= len(result) * 0.34):
            return "Legitimate Offer Made"
        else:
            return "Uncertain"
