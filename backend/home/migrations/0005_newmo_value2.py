# Generated by Django 2.2.28 on 2023-04-17 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_alligator'),
    ]

    operations = [
        migrations.AddField(
            model_name='newmo',
            name='value2',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]