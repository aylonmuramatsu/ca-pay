package com.capay.components;

import android.content.Context;
import android.graphics.Typeface;
import androidx.appcompat.widget.AppCompatTextView;

import android.util.AttributeSet;

public class LoadFonts extends AppCompatTextView {

    public LoadFonts(Context context, AttributeSet attrs, int defStyle) {
        super(context, attrs, defStyle);
        init();
    }

    public LoadFonts(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public LoadFonts(Context context) {
        super(context);
        init();
    }

    public void init() {
        Typeface tf = Typeface.createFromAsset(getContext().getAssets(), "fonts/DMSans-Regular.ttf");
        setTypeface(tf ,Typeface.NORMAL);

        // Typeface tfBold = Typeface.createFromAsset(getContext().getAssets(), "fonts/DMSans-Bold.ttf");
        // setTypeface(tfBold ,Typeface.BOLD);

        // Typeface tfMedium = Typeface.createFromAsset(getContext().getAssets(), "fonts/DMSans-Medium.ttf");
        // setTypeface(tfMedium ,Typeface.MEDIUM);


    }
}