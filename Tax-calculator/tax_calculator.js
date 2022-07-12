function Tax(income, savings) {
    var sav, inc;
    if(income<500000)
    {
        sav = savings * 0.5;
        if(sav >= 50000)
        {
            sav = 50000
        }
        inc = income - sav;

        // return [inc, sav]
    }
    else if(income < 1000000)
    {
        sav = savings * 0.3;
        if(sav >= 50000)
        {
            sav = 50000
        }
        inc = income - sav;

        // return [inc, sav]
    }
    else if(income >= 1000000 )
    {
        sav = savings * 0.1;
        if(sav >= 50000)
        {
            sav = 50000
        }

        inc = income - sav;

        // return [inc, sav]
    }

    if(inc < 250000)
    {
        return 250000
    }
    else if(inc >= 250000 && inc < 500000)
    {
        return inc * 0.1;
    }
    else if(inc >= 500000 && inc < 1000000)
    {
        return inc * 0.2;
    }
    else if(inc >= 1000000)
    {
        return inc * 0.3;
    }

}

module.exports = Tax;