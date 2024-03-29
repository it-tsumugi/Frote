<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaskListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('task_lists', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("group_id");
            $table->unsignedBigInteger("user_id");
            $table->integer("importance");
            $table->integer("urgency");
            $table->tinyInteger("is_wait");

            $table->dateTime('created_at')->nullable();
            $table->dateTime('updated_at')->nullable();
            
            //外部キー制約
            $table->foreign('group_id')->references('id')->on('groups')->OnDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->OnDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('task_lists');
    }
}
