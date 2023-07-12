# Generated by Django 4.2.2 on 2023-07-11 02:12

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("stores", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="store",
            name="status",
        ),
        migrations.AddField(
            model_name="store",
            name="is_active",
            field=models.BooleanField(default=False, verbose_name="Store status"),
        ),
    ]
